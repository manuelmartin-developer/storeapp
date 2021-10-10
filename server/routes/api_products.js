// Imports
const router = require('express').Router();
const products = require('../controllers/products')


router
    .get('/', products.getAllProducts)
    .post('/add', products.addProduct)
    .post('/remove', products.removeProduct)


module.exports = router;