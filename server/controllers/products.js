const Products = require('../models/productSchema');

const products = {

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

};

module.exports = products;