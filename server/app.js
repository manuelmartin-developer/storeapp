// Imports
const express = require('express');
require('dotenv').config();
const api_products = require('./routes/api_products');
const api_users = require('./routes/api_users');

// Variables
const app = express();
const port = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// EndPoints
app.use('/products', api_products);
// app.use('/users', api_users);

// Server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

