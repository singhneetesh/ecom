// routes/users.js
const express = require('express');
const { registerUser } = require('../controller/userController');
const router = express.Router();

// Create a new user
router.post('/register', registerUser);

module.exports = router;
