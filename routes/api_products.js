// Imports
const router = require('express').Router();
const products = require('../controllers/products')

// Products API endpoints
router
    .get('/', products.getAllProducts)
    .post('/add', products.addProduct)
    .post('/remove', products.removeProduct)
    .post('/update', products.updateProduct)

module.exports = router;