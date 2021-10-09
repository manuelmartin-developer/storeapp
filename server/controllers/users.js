const { getUser } = require('../models/users');

const generateToken = require('../middlewares/generateToken');
// const bcryptjs = require('bcryptjs');
// const jwt = require('jsonwebtoken')
// const sendEmail = require("../utils/sendEmail");
// const passport = require('passport');

const users = {

    login: async (req, res) => {
        try {
            const user = await getUser(req.body.email)
            const email = user[0].email
            const user_id = user[0].user_id
            await generateToken(res, user_id, email)
            res.sendStatus(200)
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
};

module.exports = users;