// Imports
const jwt = require('jsonwebtoken')
require('dotenv').config()

// Middleware that check if token is valid
verifyToken = (req, res, next) => {
    if (!req.body.token) {
        return res.status(403).send('No token')
    }
    const token = req.body.token
    if (!token) {
        return res.status(401).send('No token')
    }
    jwt.verify(token, process.env.JWT_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).send('Invalid token')
        }
        next()
    })
}

const authJwt = {
    verifyToken
}
module.exports = authJwt;