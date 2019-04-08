const express = require('express');
const router = express.Router();

const User = require('../models/user');
// Mongoose save
const save = (user) => {
  return new Promise((res, rej) => {
    user.save((err) => {
      if (err) {
        return rej(err);
      }
      return res();
    })
  })
}

// Register 
const register = async (req, res, next) => {
  // create user account
  // create a sample user
  const nick = new User({ 
    name: 'joepark71', 
    password: '1',
    admin: true 
  });

  // save the sample user
  save(nick)
  .then(() => {
    console.log('User saved successfully');
    res.json({ success: true });
  }).catch((err) => {
    console.log("Failed");
    res.status(500).json({ success: false });
  });
}

router.get('/', register);

module.exports = router;