const { getUser, createUser, updatePassword } = require('../models/users');
const generateToken = require('../middlewares/generateToken');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken')
const sendEmail = require("../helpers/sendEmail");

const users = {

    login: async (req, res) => {
        try {
            const user = await getUser(req.body.email);
            const email = user[0].email;
            const user_id = user[0].user_id;
            const role = user[0].role;
            const token = await generateToken(res, user_id, email, role);
            res.status(200).send({
                token: token
            })
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    logout: async (req, res) => {
        try {

            const token = req.body.token;
            jwt.sign(token, "", {
                expires: 1
            }, (logout, err) => {
                if (logout) {
                    res.sendStatus(200);
                } else {
                    res.send({
                        msg: 'Error'
                    });
                }
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    signup: async (req, res) => {
        try {
            const name = await req.body.name;
            const surname = await req.body.surname;
            const email = await req.body.email;
            const password = bcryptjs.hashSync(await req.body.password, 8);
            const address = await req.body.address;
            const newUser = await createUser(name, surname, email, password, address);
            if (newUser) {
                res.sendStatus(201);
            }

        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    recoverPass: async (req, res) => {
        try {

            const email = req.body.email;
            const user = await getUser(email);
            const user_id = user[0].user_id
            if (!user) {
                return res.sendStatus(400);
            }
            const token = jwt.sign({
                user_id,
                email
            }, process.env.JWT_KEY, {
                expiresIn: '1d'
            });

            const link = `http://localhost:3000/resetpass?id=${user_id}&token=${token}`;
            await sendEmail(email, "Password reset", link);
            res.sendStatus(200)


        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },
    resetPass: async (req, res) => {
        try {
            const reqPass = await req.body.pass1;
            const email = await req.body.email;
            const password = bcryptjs.hashSync(reqPass, 8);

            const newPassword = await updatePassword(password, email);
            if (newPassword) {
                res.sendStatus(200)
            }
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
};

module.exports = users;