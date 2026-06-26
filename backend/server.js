const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

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

const PORT = process.env.PORT || 3000;

// API Key Validation Helper
function isApiKeyConfigured() {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    return key && key.trim() !== '' && !key.includes('YOUR_SECURE');
}

// CORS headers setter helper
function setCorsHeaders(res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

// Create clean, robust HTTP server
const server = http.createServer((req, res) => {
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

    // 2. Endpoint: Fetch Google Place Details
    if (pathname.startsWith('/api/place-details/')) {
        setCorsHeaders(res);
        const placeId = pathname.substring('/api/place-details/'.length);

        if (!placeId) {
            res.writeHead(400, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: 'Place ID parameter is required' }));
            return;
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
