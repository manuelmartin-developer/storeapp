// Imports
const router = require('express').Router();
const users = require('../controllers/users');
const {
    checkEmailAndPassword
} = require('../middlewares/verifyUserLogin');
const {
    checkDuplicateEmail
} = require('../middlewares/verifyUserSignUp');
const {
    verifyToken
} = require('../middlewares/verifyAuth');
const passport = require('passport');
const generateToken = require('../middlewares/generateToken');
require('../middlewares/passport_google_setup')
require('../middlewares/passport_github_setup')

router
    .post('/login', checkEmailAndPassword, users.login)
    .post('/logout', verifyToken, users.logout)
    .post('/signup', checkDuplicateEmail, users.signup)

router.get('/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    }))

router.get('/google/callback',
    passport.authenticate('google', {
        failureRedirect: 'http://localhost:3000/login'

    }),
    (req, res) => {


        if (req.user.user_id) {
            const token = generateToken(res, req.user.user_id, req.user.email, req.user.role)
            res.redirect('http://localhost:3000/login?token=' + token);

        }else{
            res.status(400).json({
                error: error.message
            });
        }

    });

router.get('/github',
    passport.authenticate('github'));

router.get('/github/callback',
    passport.authenticate('github', {
        failureRedirect: '/login'
    }),
    (req, res) => {
        if (req.user.user_id) {
            const token = generateToken(res, req.user.user_id, req.user.email, req.user.role)
            res.redirect('http://localhost:3000/login?token=' + token);
        }else{
            res.status(400).json({
                error: error.message
            });
        }
    });


module.exports = router;