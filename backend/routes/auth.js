// backend/routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Register route
router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user || user.password !== password) {
      return res.status(401).send('Invalid credentials');
    }
    res.send('Login successful');
  } catch (error) {
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
