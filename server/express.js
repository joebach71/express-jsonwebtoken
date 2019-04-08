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
// routers/controllers
// apply the routes to our application with the prefix /api
const registration = require('./controllers/registration');
const apis = require('./controllers/apis');
const authenticate = require('./controllers/authenticate');
const index = require('./controllers/index');
app.use('/api', apis);
app.use('/register', registration);
app.use('/authenticate', authenticate);
app.use('/', index);

module.exports = app;