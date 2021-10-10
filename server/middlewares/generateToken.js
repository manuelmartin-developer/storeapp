const jwt = require('jsonwebtoken')
require('dotenv').config()

const generateToken = (res, user_id, email, role) => {

    const token = jwt.sign({
        user_id, email, role
    }, process.env.JWT_KEY, {
        expiresIn: '1d'
    });
    return token;
}
module.exports = generateToken