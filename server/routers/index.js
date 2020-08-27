const express = require('express');
const router  = express.Router();
const app     = express();

// =======================
// routes ================
// =======================
// apply the routes to our application with the prefix /api
const apiRoutes = require('./apis');
const registrationRoutes = require('./registration');
const authenticateRoutes = require('./authenticate');

app.use('/api', apiRoutes);
app.use('/register', registrationRoutes);
app.use('/authenticate', authenticateRoutes);

// basic route
router.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + JSON.stringify(req.route) + '/api');
});

module.exports = router;
