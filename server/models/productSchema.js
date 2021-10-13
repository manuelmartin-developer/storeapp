// Imports
const mongoose = require('../db/productsDB');
const mongooseSerial = require('mongoose-serial');

// Schema for products DB
const productSchema = new mongoose.Schema({
    id: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    manufacturer: {
        name: {
            type: String,
            required: true
        },
        cif: {
            type: String,
            required: true

        },
        address: {
            type: String,
            required: true

        }
    }

});

productSchema.plugin(mongooseSerial, {
    field: 'id',
    prefix: 'productId',
    separator: '-',
    digits: 7
});

module.exports = mongoose.model('Product', productSchema, 'Products');