// Imports
const router = require('express').Router();
const users = require('../controllers/users');
const { checkEmailAndPassword } = require('../middlewares/verifyUserLogin');
const { checkDuplicateEmail } = require('../middlewares/verifyUserSignUp');
const { verifyToken } = require('../middlewares/verifyAuth');
const { checkEmailRecover } = require('../middlewares/verifyRecoverPass');
const passport = require('passport');
const generateToken = require('../middlewares/generateToken');
require('../middlewares/passport_google_setup')
require('../middlewares/passport_github_setup')

// Email
router
    .post('/login', checkEmailAndPassword, users.login)
    .post('/logout', verifyToken, users.logout)
    .post('/signup', checkDuplicateEmail, users.signup)
    .post('/recover', checkEmailRecover, users.recoverPass)
    .post('/reset', checkEmailRecover, users.resetPass)

// OAuth Google
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
        } else {
            res.status(400).json({
                error: error.message
            });
        }
    });

// OAuth Github
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
        } else {
            res.status(400).json({
                error: error.message
            });
        }
    });


module.exports = router;