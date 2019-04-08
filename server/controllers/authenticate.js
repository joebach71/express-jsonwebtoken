const express = require('express');
const config = require('../config');
// get an instance of the router for api routes
const routes = express.Router();
const jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
const User = require('../models/user');
const RedisClient = require('../database/redis');

const setPayload = (user) => {
  return { admin: user.admin };
}
const setRedisKey = (token, prefix) => {
  if (!prefix) prefix = `token:`
  if (!token) {
    throw new Error(`Missing refresh token`);
  }
  return `${prefix}:${token}`;
}
const storeRefreshToken = async (refreshToken, token) => {
  try {
    // create client
    // store using key
    return RedisClient.set(setRedisKey(refreshToken), token);
  } catch (err) {
    console.log(err);
  }
  return;
}
const getAccessTokeen = (user) => {
  const payload = setPayload(user);
  return jwt.sign(payload, config.secret, {
    expiresIn: config.tokenExpiresIn // expires in 24 hours
  });
}

const getRefreshToken = (user) => {
  const payload = { name: user.name };
  try {
    return jwt.sign(payload, config.refreshSecret, {
      expiresIn: config.refreshTokenExpiresIn
    });
  } catch (err) {
    throw err;
  }
}
// route to authenticate a user (POST http://localhost:8080/api/authenticate)
routes.post('/', async (req, res) => {
  // find the user
  try {
    // console.log(await User.find({}));
    const user = await User.findOne({ name: req.body.name });
    console.log(user);
    if (!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else {
      // check if password matches
      if (user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
      } else {
        // if user is found and password is right
        // create a token with only our given payload
        // we don't want to pass in the entire user since that has the password
        const token = getAccessTokeen(user);
        const refreshToken = getRefreshToken(user);
        if (!storeRefreshToken(refreshToken, token)) {
          throw new Error(`Unable to store to redis`);
        }
        // return the information including token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token,
          refreshToken
        });
      } 
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: err });
  }
});

module.exports = routes;