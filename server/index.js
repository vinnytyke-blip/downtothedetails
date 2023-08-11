const express = require('express');
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const app = express();
const cors = require('cors');
const path = require('path');

// serve up production assets
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
app.use(express.static(path.join(__dirname, '..', 'client', 'public')))

app.use(express.json());
app.use(cors());
// let the react app handle any unknown routes 
// serve up the index.html if express doesn't recognize the route

app.get('/api/reviews', async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    const { apiKey } = req.query;

    try {
        const response = await fetch(
            `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apiKey}&input=Down%20To%20The%20Details%20L.L.C.&inputtype=textquery`
        );

        const data = await response.json();
        console.log("first api fetch: ", data);

        if (data.candidates && data.candidates.length > 0) {
            const placeId = data.candidates[0].place_id;

            // Initialize an empty array to collect reviews
            let reviews = [];
            let nextPageToken = null;

            // Use a loop to handle pagination and retrieve all reviews
            do {
                const detailsResponse = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}&fields=reviews&page_token=${nextPageToken || ''}`
                );

                const detailsData = await detailsResponse.json();

                if (detailsData.result && detailsData.result.reviews) {
                    reviews = [...reviews, ...detailsData.result.reviews];
                }

                nextPageToken = detailsData.next_page_token || null;
            } while (nextPageToken);

            // Log the reviews data received on the server-side before sending to the client
            console.log('Reviews data on the server-side:', reviews);

            res.json(reviews); // Send the reviews data to the client
            return;
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
