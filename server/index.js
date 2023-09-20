const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express();
const cors = require('cors');
const path = require('path');
const compression = require('compression');

// serve up production assets
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.use(express.json());
app.use(cors());
app.use(compression({
    level: 6, // Compression level (0-9)
    threshold: 1024, // Minimum response size (in bytes) to trigger compression
    filter: (req, res) => {
        // Add custom logic to exclude specific content types
        if (req.headers['content-type'] === 'application/json') {
            return false; // Do not compress JSON responses
        }
        return compression.filter(req, res);
    },
}));
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

app.get('/api/reviews', async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    const { apiKey } = req.query;

    try {

        if (data.candidates && data.candidates.length > 0) {
            const detailsResponse = await fetch(
                `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=ChIJN2hmQkVnbKYRs5gVMNjySYo&fields=reviews`
            );

            const detailsData = await detailsResponse.json();

            if (detailsData.result && detailsData.result.reviews) {
                const reviews = detailsData.result.reviews;

                // Log the reviews data received on the server-side before sending to the client
                console.log('Reviews data on the server-side:', reviews);

                res.json(reviews); // Send the reviews data to the client
                return;
            }
        }

        res.json([]); // Return an empty array if no reviews are found
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});

app.use((req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 5001;
console.log('server started on port:', PORT);
app.listen(PORT);