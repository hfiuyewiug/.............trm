const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// API Key Validation Helper
function isApiKeyConfigured() {
    const key = process.env.GOOGLE_PLACES_API_KEY;
    return key && key.trim() !== '' && !key.includes('YOUR_SECURE');
}

// 1. Endpoint: Fetch Google Place Details
app.get('/api/place-details/:placeId', async (req, res) => {
    const { placeId } = req.params;

    if (!placeId) {
        return res.status(400).json({ error: 'Place ID parameter is required' });
    }

    // If API Key is not configured, send graceful setup instructions payload
    if (!isApiKeyConfigured()) {
        return res.status(200).json({
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
        });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews,photos,opening_hours,formatted_address,website,formatted_phone_number&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const data = response.data;

        if (data.status !== 'OK') {
            return res.status(200).json({
                connected: true,
                status: data.status,
                error: data.error_message || 'Failed to fetch details from Google Places API.'
            });
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

        res.json(placeDetails);

    } catch (err) {
        console.error('Error contacting Google Places API:', err.message);
        res.status(500).json({
            error: 'Internal Server Error while communicating with Google Places API',
            details: err.message
        });
    }
});

// 2. Endpoint: Stream Google Place Photo (Securing the API Key from image tags)
app.get('/api/place-photo/:photoReference', async (req, res) => {
    const { photoReference } = req.params;

    if (!photoReference) {
        return res.status(400).json({ error: 'Photo reference is required' });
    }

    if (!isApiKeyConfigured()) {
        return res.status(403).json({ error: 'Google Places API Key is not configured on backend.' });
    }

    const apiKey = process.env.GOOGLE_PLACES_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photo_reference=${photoReference}&key=${apiKey}`;

    try {
        const response = await axios({
            method: 'GET',
            url: url,
            responseType: 'stream'
        });

        // Set response headers to mimic content headers
        res.setHeader('Content-Type', response.headers['content-type'] || 'image/jpeg');
        res.setHeader('Cache-Control', 'public, max-age=86400'); // Cache for 24h

        response.data.pipe(res);

    } catch (err) {
        console.error('Error fetching photo from Google:', err.message);
        res.status(500).json({ error: 'Error fetching photo reference from Google' });
    }
});

app.listen(PORT, () => {
    console.log(`Google Places Proxy Service Layer is listening on http://localhost:${PORT}`);
});
