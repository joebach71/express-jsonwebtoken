// =======================
// get the packages we need ============
// =======================
const express     = require('express');
const app         = express();
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const mongoose    = require('./database/mongoose');

app.set('database', mongoose.connection);
// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

// custom middlewares
const { validateToken } = require('./middlewares/token');
app.use(validateToken);
//
const index = require('./routers/index');
// main router
app.use('/', index);

module.exports = app;