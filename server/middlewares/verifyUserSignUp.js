const { response } = require('express');
const User = require('../models/users');

checkDuplicateEmail = (req, res, next) => {
    
    User.getUser(req.body.email)
    .then(user => {
        if(user.length !== 0){
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