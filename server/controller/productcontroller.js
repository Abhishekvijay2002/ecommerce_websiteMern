
const productM0del = require("../models/productM0del");
const productModel = require("../models/productM0del");
const uploadToCloudinary = require("../Utilities/imageUpload");

const createproduct = async (req, res) => {
    try {
        const { title, description, price, stock, category } = req.body;

        if (!title || !description || !price || !stock || !category) {
            return res.status(400).json({ error: "All fields are required" });
        }
        if (!req.file) {
            return res.status(400).json({ error: "Image not found" });
        }
        const cloudinaryResponse = await uploadToCloudinary(req.file.path);
        console.log(cloudinaryResponse, "image uploaded");

        const newProduct = new productModel({
            title,
            description,
            price,
            stock,
            category,
            image: cloudinaryResponse
        });
        let savedProduct = await newProduct.save();
        if (savedProduct) {
            return res.status(201).json({ message: "Product created successfully", savedProduct });
        }
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
};

const listProducts = async (req, res) => {
    try {
        const productList = await productModel.find();
        res.status(200).json(productList);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
};

const productDetails = async (req, res) => {
    try {
        const { productid } = req.params;
        console.log(req.params.productid);

        const productDetail = await productM0del.findById(productid);
        if (!productDetail) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json(productDetail);
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { productid } = req.params;
        const { title, description, price, stock, category } = req.body;
        let imageurl;

        let isProductExist = await productM0del.findById(productid);
        if (!isProductExist) {
            return res.status(404).json({ message: "Product not found" });
        }
        if (req.file) {
            const cloudinaryResponse = await uploadToCloudinary(req.file.path);
            imageurl = cloudinaryResponse;
        }
        const updatedProduct = await productM0del.findByIdAndUpdate(
            productid,
            { title, description, price, stock, category, image: imageurl || isProductExist.image },
            { new: true }
        );
        res.status(200).json({ message: "Product updated successfully", updatedProduct });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { productid } = req.params;
        const deletedProduct = await productM0del.findByIdAndDelete(productid);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        console.log(error);
        res.status(error.status || 500).json({ message: error.message || "Internal Server Error" });
    }
};

module.exports = { createproduct, listProducts, productDetails, updateProduct, deleteProduct };
