// Imports
const router = require('express').Router();
const products = require('../controllers/products')

/******* USERS *******/


/******* PRODUCTS *******/
router
    .get('/', products.getAllProducts);


    module.exports = router;