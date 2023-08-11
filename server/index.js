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
// let the react app to handle any unknown routes 
// serve up the index.html if express does'nt recognize the route

app.get('/api/reviews', async (req, res) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    const { apiKey } = req.query;

    try {
        const googleApiUrl = `https://maps.googleapis.com/maps/api/place/findplacefromtext/json?key=${apiKey}&input=Down%20To%20The%20Details%20L.L.C.&inputtype=textquery`;
        const response = await fetch(googleApiUrl);
    
        const data = await response.json();
        console.log("first api fetch: ", data);
    
        if (data.candidates && data.candidates.length > 0) {
            const placeId = data.candidates[0].place_id;
            const detailsApiUrl = `https://maps.googleapis.com/maps/api/place/details/json?key=${apiKey}&place_id=${placeId}&fields=reviews`;
            const detailsResponse = await fetch(detailsApiUrl);
    
            const detailsData = await detailsResponse.json();
    
            if (detailsData.result && detailsData.result.reviews) {
                const reviews = detailsData.result.reviews;
    
                // Log the reviews data received on the server-side before sending to the client
                console.log('Reviews data on the server-side:', reviews);
    
                // Fetch reviews from the custom API
                const customApiUrl = `https://downtothedetailsllc-16467d68fd94.herokuapp.com/api/reviews?apiKey=${apiKey}&query=Down%20To%20The%20Details`;
                const customApiResponse = await fetch(customApiUrl);
                const customApiData = await customApiResponse.json();
    
                // Log the reviews data received from the custom API
                console.log('Custom API Reviews data:', customApiData);
    
                res.json(customApiData); // Send the reviews data from the custom API to the client
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