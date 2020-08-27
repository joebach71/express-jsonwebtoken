const User = require('../models/user');

const defaultRoute = (req, res) => {
  res.json({ message: 'Welcome to the coolest API on earth!' });
}

const userRoute = (req, res) => {
    User.find({}, function(err, users) {
      res.json(users);
  })
};
const apiControllers = { defaultRoute, userRoute }

module.exports = apiControllers;
