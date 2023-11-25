// CreateSignup.js

const express = require('express');
const router = express.Router();
const ModSignup1 = require('../Models/ModSignup');

router.post('/signup', async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;

  try {
    const newSignup = new ModSignup1({
      name,
      email,
      phoneNumber,
      password
    });

    await newSignup.save();
    res.status(201).json({ message: 'Signup data saved successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
