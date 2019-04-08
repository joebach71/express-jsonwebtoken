const mongoose = require('mongoose');
const config = require('../config'); // get our config file
// =======================
// configuration =========
// =======================
mongoose.connect(config.database, { poolSize: 4 }); // connect to database
module.exports = mongoose;