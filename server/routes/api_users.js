// Imports
const router = require('express').Router();
const users = require('../controllers/users');
const { isEmptyLogin, checkEmailAndPassword } = require('../middlewares/verifyUserLogin');

router
    .post('/login', isEmptyLogin, checkEmailAndPassword, users.login);


module.exports = router;