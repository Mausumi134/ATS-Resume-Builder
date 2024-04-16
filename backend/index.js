
const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Define the path to the main directory
const mainDirectoryPath = path.join(__dirname, '..'); // Move up one directory

// Serve static files from the main directory
app.use(express.static(mainDirectoryPath));

// Define route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(mainDirectoryPath, 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});
