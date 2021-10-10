// Imports
const express = require('express');
require('dotenv').config();
const cors = require("cors");
const cookieParser = require('cookie-parser');
const api_products = require('./routes/api_products');
const api_users = require('./routes/api_users');

// Variables
const app = express();
const port = process.env.PORT;
const corsOptions = {
    origin: [
      "https://localhost:process.env.PORT"
    ]
  };

// Middlewares
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// EndPoints
app.use('/products', api_products);
app.use('/users', api_users);

// Server
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
})

