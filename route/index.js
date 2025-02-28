const express = require('express');
const router = express.Router();
const calculatorController = require('../controller/calculatorController');

// Base route for hello world
router.get('/', (req, res) => {
    res.send('Hello World!');
});

// Route for /lokesh
router.get('/lokesh', (req, res) => {
    res.send('Hello Lokesh!');
});

// Calculator route
router.get('/calculate', calculatorController.calculate);

module.exports = router;