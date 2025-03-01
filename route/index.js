const express = require('express');
const router = express.Router();
const calculatorController = require('../controller/calculatorController');
const authController = require('../controller/authController');
const path = require('path');

// Base route for hello world
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Route for /lokesh
router.get('/lokesh', (req, res) => {
    res.send('Hello Lokesh!');
});

// Calculator route
router.get('/calculate', calculatorController.calculate);

// Login route
router.post('/login', authController.login);

module.exports = router;