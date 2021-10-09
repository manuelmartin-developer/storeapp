// Imports
const router = require('express').Router();
const products = require('../controllers/products')


router
    .get('/', products.getAllProducts);


module.exports = router;