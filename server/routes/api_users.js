// Imports
const router = require('express').Router();
const users = require('../controllers/users');
const { checkEmailAndPassword } = require('../middlewares/verifyUserLogin');
const { checkDuplicateEmail } = require('../middlewares/verifyUserSignUp');
const { verifyToken} = require('../middlewares/verifyAuth');

router
    .post('/login', checkEmailAndPassword, users.login)
    .post('/logout', verifyToken, users.logout)
    .post('/signup', checkDuplicateEmail, users.signup)


module.exports = router;