const express = require('express');
const apiRoutes  = express.Router();

// =======================
// routes ================
// =======================
// apply the routes to our application with the prefix /api
const apiControllers = require('../controllers/apis');


// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', apiControllers.defaultRoute);

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', apiControllers.userRoute); 

module.exports = apiRoutes;
