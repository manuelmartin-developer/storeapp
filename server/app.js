// Imports
const express = require('express');
require('dotenv').config();
const router_web = require('./routes/router_web');

// Variables
const app = express();
const port = process.env.PORT;

app.use('/', router_web);

app.listen(port, () => {
    console.log(`Server listening athttp://localhost:${port}`);
})

