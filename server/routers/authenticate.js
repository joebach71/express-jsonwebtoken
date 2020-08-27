const express = require('express');
const authenticateRoutes  = express.Router();

// =======================
// routes ================
// =======================
// apply the routes to our application with the prefix /api
const authenticate = require('../controllers/authenticate');

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
authenticateRoutes.post('/', authenticate.authenticate);
  
module.exports = authenticateRoutes;
