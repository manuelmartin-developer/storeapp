// Imports
const User = require('../models/users');

// Middleware than check if user exists in SQLdb
checkDuplicateEmail = (req, res, next) => {

  User.getUser(req.body.email)
    .then(user => {
      if (user.length !== 0) {
        res.sendStatus(400);
        return;
      };
      next();
    });
};

const verifySignUp = {
  checkDuplicateEmail
};
module.exports = verifySignUp;