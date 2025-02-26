const express = require('express');
const router = express.Router();

// Base route for hello world
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route for /lokesh
router.get('/lokesh', (req, res) => {
    res.send('Hello Lokesh!');
});

module.exports = router;