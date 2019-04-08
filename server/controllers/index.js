const express = require('express');
const router = express.Router();

// =======================
// routes ================
// =======================
// basic route
router.get('/', (req, res) => {
    res.send('Hello! The API is at http://localhost:' + JSON.stringify(req.route) + '/api');
});

module.exports = router;
