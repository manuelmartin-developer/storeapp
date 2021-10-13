// Imports
const User = require('../models/users')

// Middleware that check if email exists in SQLdb
checkEmailRecover = (req, res, next) => {
    const user = User.getUser(req.body.email)
        .then((data) => {
            if (data.length == 0) {
                return res.sendStatus(400)
            }
            next()
        })
};

const verifyUserRecover = {
    checkEmailRecover
};

module.exports = verifyUserRecover