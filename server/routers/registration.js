const express = require('express');
const registrationRoutes  = express.Router();

// =======================
// routes ================
// =======================
// routes to our application with the prefix /api
const registrationController = require('../controllers/registration');

// registration route
registrationRoutes.get('/', registrationController.register);

module.exports = registrationRoutes;
