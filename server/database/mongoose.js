const mongoose = require('mongoose');
const config = require('../config'); // get our config file
// =======================
// configuration =========
// =======================
mongoose.connect(config.database,
    { poolSize: 4, useUnifiedTopology: true, useNewUrlParser: true }); // connect to database
module.exports = mongoose;