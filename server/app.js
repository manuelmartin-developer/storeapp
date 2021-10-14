// Imports
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const api_products = require('./routes/api_products');
const api_users = require('./routes/api_users');
const passport = require('passport');


// Variables
const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: [
      "https://localhost:9000",
      "https://localhost:3000",

    ]
  };

// Middlewares
app.use(cors(corsOptions));
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// API endPoints
app.use('/products', api_products);
app.use('/users', api_users);

// Server
const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

module.exports = {app, server};
