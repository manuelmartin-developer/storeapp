// Imports
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Generate a token for client auth
const generateToken = (res, user_id, email, role) => {

    const token = jwt.sign({
        user_id, email, role
    }, process.env.JWT_KEY, {
        expiresIn: '1d'
    });
    return token;
}
module.exports = generateToken