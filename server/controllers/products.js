// Imports
const Products = require('../models/productSchema');

// Products controller
const products = {

    // Retrieve all products from Mongodb
    getAllProducts: async (req, res) => {
        try {
            const allProducts = await Products.find();
            res.status(200).json(allProducts);
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },

    // Add a product to Mongodb
    addProduct: async (req, res) => {
        try {
            const product = await req.body;
            const newProduct = await new Products({
                title: product.title,
                image: product.image,
                rating: product.rating,
                price: product.price,
                manufacturer: {
                    name: product.name,
                    cif: product.cif,
                    address: product.address
                }
            });

            const productAdded = await newProduct.save();
            res.status(201).json(productAdded);

        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },

    // Remove one product from Mongodb
    removeProduct: async (req, res) => {
        try {
            const id = req.body.id;
            const deleteProduct = await Products.findOneAndRemove({
                id: id
            })
            res.sendStatus(202);

        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },

    // Update the properties of a Product
    updateProduct: async (req, res) => {
        try {
            const product = await req.body;
            const updateProduct = await Products.findOneAndUpdate({
                id: product.id
            }, product);

            if (updateProduct) {
                res.sendStatus(200);
            }

        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    },

};

module.exports = products;