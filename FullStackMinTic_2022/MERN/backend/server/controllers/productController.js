import Product from '../models/products.js';

export const createProduct = async (req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(201).json(product);
    }
    catch(error){
        res.status(500).json(error);
    }
    

}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error);

    }
}

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const updateProductById = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, { new: true });
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const deleteProductById = async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json('Product deleted');
    } catch (error) {
        res.status(500).json(error);
    }
}

