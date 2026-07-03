const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const { createClient } = require('@supabase/supabase-js');
global.WebSocket = require('ws');


// Manual parser for .env configuration
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    if (fs.existsSync(envPath)) {
        try {
            const content = fs.readFileSync(envPath, 'utf8');
            content.split(/\r?\n/).forEach(line => {
                const trimmed = line.trim();
                if (!trimmed || trimmed.startsWith('#')) return;
                const eqIndex = trimmed.indexOf('=');
                if (eqIndex === -1) return;
                const key = trimmed.slice(0, eqIndex).trim();
                let val = trimmed.slice(eqIndex + 1).trim();
                if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
                    val = val.slice(1, -1);
                }
                process.env[key] = val;
            });
        } catch (err) {
            console.error('Failed to parse .env file:', err);
        }
    }
}

// Load environment configurations
loadEnv();

// Prevent server crashes on unhandled errors (e.g., EPIPE, ECONNRESET when client aborts request)
process.on('uncaughtException', (err) => {
    console.error('[UNCAUGHT EXCEPTION]', err);
});
process.on('unhandledRejection', (reason, promise) => {
    console.error('[UNHANDLED REJECTION] at:', promise, 'reason:', reason);
});

// Supabase Configuration Validation
function isSupabaseConfigured() {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
    return url && url.trim() !== '' && !url.includes('YOUR_SUPABASE') &&
           key && key.trim() !== '' && !key.includes('YOUR_SUPABASE');
}

let supabase = null;
if (isSupabaseConfigured()) {
    console.log('[SUPABASE] Initializing Supabase client...');
    supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL,
        process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    );
} else {
    console.log('[SUPABASE] Supabase credentials not fully configured. Caching is disabled.');
}

const PORT = process.env.PORT || 3000;

// API Key Validation Helper
function isApiKeyConfigured() {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    return key && key.trim() !== '' && !key.includes('YOUR_SECURE');
}

// CORS headers setter helper
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Request body helper parser
function getRequestBody(req) {
    return new Promise((resolve, reject) => {
        let body = '';
        req.on('data', chunk => { body += chunk.toString(); });
        req.on('end', () => {
            try {
                resolve(body ? JSON.parse(body) : {});
            } catch (err) {
                reject(err);
            }
        });
        req.on('error', err => { reject(err); });
    });
}

// Create clean, robust HTTP server
const server = http.createServer(async (req, res) => {
    // 1. Set CORS header for all OPTIONS requests (preflight)
    if (req.method === 'OPTIONS') {
        setCorsHeaders(res);
        res.writeHead(204);
        res.end();
        return;
    }

    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    console.log(`[REQUEST] ${req.method} ${parsedUrl.path}`);

    // 2. Endpoint: Fetch Google Place Details (with Supabase caching)
    if (pathname.startsWith('/api/place-details/')) {
        setCorsHeaders(res);
        const placeId = pathname.substring('/api/place-details/'.length);

        if (!placeId) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Place ID parameter is required' }));
            return;
        }

        // Try to load from Supabase Cache first
        if (supabase) {
            try {
                const { data: cachedPlace, error: placeError } = await supabase
                    .from('google_places_cache')
                    .select('*')
                    .eq('place_id', placeId)
                    .single();

                if (cachedPlace) {
                    const cacheAgeMs = Date.now() - new Date(cachedPlace.last_cached).getTime();
                    const cacheLimitMs = 24 * 60 * 60 * 1000; // 24 hours
                    if (cacheAgeMs < cacheLimitMs) {
                        const { data: cachedReviews, error: reviewsError } = await supabase
                            .from('google_reviews_cache')
                            .select('*')
                            .eq('place_id', placeId);

                        if (!reviewsError) {
                            console.log(`[CACHE HIT] Loaded place details and reviews for ${placeId} from Supabase cache`);
                            const reviews = cachedReviews || [];
                            const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                            reviews.forEach(r => {
                                const rating = Math.round(r.rating);
                                if (distribution[rating] !== undefined) {
                                    distribution[rating]++;
                                }
                            });

                            const placeDetails = {
                                connected: true,
                                placeId: placeId,
                                name: cachedPlace.name,
                                rating: parseFloat(cachedPlace.rating) || 0.0,
                                user_ratings_total: cachedPlace.user_ratings_total || 0,
                                formatted_address: cachedPlace.formatted_address || '',
                                formatted_phone_number: cachedPlace.formatted_phone_number || '',
                                website: cachedPlace.website || '',
                                opening_hours: cachedPlace.weekday_text ? {
                                    open_now: null,
                                    weekday_text: JSON.parse(cachedPlace.weekday_text)
                                } : null,
                                photos: cachedPlace.photos_references ? JSON.parse(cachedPlace.photos_references) : [],
                                reviews: reviews.map(r => ({
                                    author_name: r.author_name,
                                    profile_photo_url: r.profile_photo_url || '',
                                    rating: r.rating,
                                    relative_time_description: r.relative_time_description || '',
                                    text: r.review_text || '',
                                    time: parseInt(r.review_time)
                                })),
                                rating_distribution: distribution
                            };

                            res.writeHead(200, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify(placeDetails));
                            return;
                        }
                    } else {
                        console.log(`[CACHE EXPIRED] Cache for ${placeId} is older than 24 hours, refetching...`);
                    }
                } else {
                    console.log(`[CACHE MISS] No cached data for ${placeId}`);
                }
            } catch (dbErr) {
                console.error('[SUPABASE ERROR] Failed to query cache:', dbErr.message);
            }
        }

        // If API Key is not configured, send graceful setup instructions payload
        if (!isApiKeyConfigured()) {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                connected: false,
                error: 'Google Places API Required',
                setupInstructions: {
                    apiKeyConfigured: false,
                    placeIdGiven: placeId,
                    steps: [
                        'Go to Google Cloud Console (https://console.cloud.google.com/)',
                        'Enable the "Places API" for your credentials project.',
                        'Create an API Key under the "Credentials" tab.',
                        'Create a ".env" file in the "backend" directory.',
                        'Add your key: GOOGLE_PLACES_API_KEY=your_actual_key_here',
                        'Restart the Node proxy backend server.'
                    ]
                }
            }));
            return;
        }

        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,photos,opening_hours,formatted_address,website,formatted_phone_number&key=${apiKey}`;

        https.get(googleUrl, (apiRes) => {
            let rawData = '';
            apiRes.on('data', (chunk) => { rawData += chunk; });
            apiRes.on('end', () => {
                try {
                    const data = JSON.parse(rawData);

                    if (data.status !== 'OK') {
                        res.writeHead(200, { 'Content-Type': 'application/json' });
                        res.end(JSON.stringify({
                            connected: true,
                            status: data.status,
                            error: data.error_message || 'Failed to fetch details from Google Places API.'
                        }));
                        return;
                    }

                    const result = data.result || {};

                    // Parse rating distribution from Google reviews to simulate rating distribution visualizer
                    const reviews = result.reviews || [];
                    const distribution = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
                    reviews.forEach(r => {
                        const rating = Math.round(r.rating);
                        if (distribution[rating] !== undefined) {
                            distribution[rating]++;
                        }
                    });

                    // Construct standard clean payload for frontend
                    const placeDetails = {
                        connected: true,
                        placeId: placeId,
                        name: result.name,
                        rating: result.rating || 0.0,
                        user_ratings_total: result.user_ratings_total || 0,
                        formatted_address: result.formatted_address || '',
                        formatted_phone_number: result.formatted_phone_number || '',
                        website: result.website || '',
                        opening_hours: result.opening_hours ? {
                            open_now: result.opening_hours.open_now,
                            weekday_text: result.opening_hours.weekday_text || []
                        } : null,
                        photos: (result.photos || []).map(p => ({
                            photo_reference: p.photo_reference,
                            height: p.height,
                            width: p.width
                        })),
                        reviews: reviews.map(r => ({
                            author_name: r.author_name,
                            profile_photo_url: r.profile_photo_url || '',
                            rating: r.rating,
                            relative_time_description: r.relative_time_description || '',
                            text: r.text || '',
                            time: r.time
                        })),
                        rating_distribution: distribution
                    };

                    res.writeHead(200, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify(placeDetails));

                    // Store response in cache asynchronously
                    if (supabase) {
                        (async () => {
                            try {
                                const placeData = {
                                    place_id: placeId,
                                    name: placeDetails.name,
                                    formatted_address: placeDetails.formatted_address,
                                    formatted_phone_number: placeDetails.formatted_phone_number,
                                    website: placeDetails.website,
                                    rating: placeDetails.rating,
                                    user_ratings_total: placeDetails.user_ratings_total,
                                    weekday_text: placeDetails.opening_hours ? JSON.stringify(placeDetails.opening_hours.weekday_text) : null,
                                    photos_references: JSON.stringify(placeDetails.photos),
                                    last_cached: new Date().toISOString()
                                };

                                const { error: upsertPlaceError } = await supabase
                                    .from('google_places_cache')
                                    .upsert(placeData);

                                if (upsertPlaceError) {
                                    console.error('[SUPABASE ERROR] Failed to upsert place to cache:', upsertPlaceError.message);
                                } else {
                                    // Remove old cached reviews
                                    await supabase
                                        .from('google_reviews_cache')
                                        .delete()
                                        .eq('place_id', placeId);

                                    // Insert new reviews
                                    const reviewsToInsert = (result.reviews || []).map((r, idx) => ({
                                        review_id: `${placeId}_rev_${idx}_${Date.now()}`,
                                        place_id: placeId,
                                        author_name: r.author_name,
                                        profile_photo_url: r.profile_photo_url || '',
                                        rating: r.rating,
                                        relative_time_description: r.relative_time_description || '',
                                        review_text: r.text || '',
                                        review_time: r.time || Date.now(),
                                        last_cached: new Date().toISOString()
                                    }));

                                    if (reviewsToInsert.length > 0) {
                                        const { error: insertReviewsError } = await supabase
                                            .from('google_reviews_cache')
                                            .insert(reviewsToInsert);
                                        if (insertReviewsError) {
                                            console.error('[SUPABASE ERROR] Failed to insert reviews to cache:', insertReviewsError.message);
                                        }
                                    }
                                    console.log(`[CACHE STORED] Saved details and reviews for ${placeId} to Supabase cache`);
                                }
                            } catch (saveErr) {
                                console.error('[SUPABASE ERROR] Error storing cache:', saveErr.message);
                            }
                        })();
                    }

                } catch (err) {
                    console.error('Error parsing response from Google:', err.message);
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({
                        error: 'Error parsing response from Google Places API',
                        details: err.message
                    }));
                }
            });
        }).on('error', (err) => {
            console.error('Error contacting Google Places API:', err.message);
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
                error: 'Internal Server Error while communicating with Google Places API',
                details: err.message
            }));
        });
        return;
    }

    // 3. Endpoint: Stream Google Place Photo (Securing the API Key from image tags)
    if (pathname.startsWith('/api/place-photo/')) {
        setCorsHeaders(res);
        const photoReference = pathname.substring('/api/place-photo/'.length);

        if (!photoReference) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Photo reference is required' }));
            return;
        }

        if (!isApiKeyConfigured()) {
            res.writeHead(403, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Google Places API Key is not configured on backend.' }));
            return;
        }

        const apiKey = process.env.GOOGLE_PLACES_API_KEY;
        const googleUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoReference}&key=${apiKey}`;

        const fetchPhoto = (targetUrl) => {
            https.get(targetUrl, (apiRes) => {
                // Handle Google HTTP Redirects (302 Found)
                if (apiRes.statusCode >= 300 && apiRes.statusCode < 400 && apiRes.headers.location) {
                    fetchPhoto(apiRes.headers.location);
                    return;
                }

                res.writeHead(apiRes.statusCode, {
                    'Content-Type': apiRes.headers['content-type'] || 'image/jpeg',
                    'Cache-Control': 'public, max-age=86400',
                    'Access-Control-Allow-Origin': '*'
                });
                apiRes.pipe(res);
            }).on('error', (err) => {
                console.error('Error fetching photo from Google:', err.message);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error fetching photo reference from Google' }));
            });
        };

        fetchPhoto(googleUrl);
        return;
    }

    // 4. Default handler: Serve static files from the parent directory (workspace root)
    const mimeTypes = {
        '.html': 'text/html',
        '.css': 'text/css',
        '.js': 'application/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.ico': 'image/x-icon',
        '.webp': 'image/webp'
    };

    let filePath = path.join(__dirname, '..', pathname);
    const safePath = path.normalize(filePath);
    const rootPath = path.normalize(path.join(__dirname, '..'));

    // Prevent path traversal attacks
    if (!safePath.startsWith(rootPath)) {
        res.writeHead(403, { 'Content-Type': 'text/plain' });
        res.end('403 Forbidden');
        return;
    }

    fs.stat(safePath, (err, stats) => {
        let targetPath = safePath;
        if (!err && stats.isDirectory()) {
            targetPath = path.join(safePath, 'index.html');
        }

        fs.readFile(targetPath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404, { 'Content-Type': 'text/html' });
                    res.end('<h1>404 Not Found</h1>');
                } else {
                    res.writeHead(500, { 'Content-Type': 'text/plain' });
                    res.end(`Internal Server Error: ${error.code}`);
                }
            } else {
                const ext = path.extname(targetPath).toLowerCase();
                const contentType = mimeTypes[ext] || 'application/octet-stream';
                const headers = { 'Content-Type': contentType };
                if (ext === '.html') {
                    headers['Cache-Control'] = 'no-store, no-cache, must-revalidate, proxy-revalidate';
                    headers['Pragma'] = 'no-cache';
                    headers['Expires'] = '0';
                }
                res.writeHead(200, headers);
                res.end(content, 'utf-8');
            }
        });
    });
});

server.listen(PORT, () => {
    console.log(`Google Places Proxy Service Layer is listening on http://localhost:${PORT}`);
});
