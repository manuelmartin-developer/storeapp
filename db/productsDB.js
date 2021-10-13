// Imports
const mongoose = require('mongoose');
require('dotenv').config();

// Mongodb connection config
mongoose.connect(process.env.PRODUCTS_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('open', () => console.log('Connection to MongoDb Products established'));

module.exports = mongoose;