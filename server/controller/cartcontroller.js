const cartModel = require("../models/cartModels");
const productModel = require("../models/productM0del");

const addToCart = async (req, res) => {
    try {
        const userid = req.userId;
        const productid = req.params.productid;

        console.log("User ID:", userid);
        console.log("Product ID:",productid);

        const product = await productModel.findById(productid);
        console.log(product);
        if (!product) {
            return res.status(404).json({ error: "Product not found" });
        }

        let cart = await cartModel.findOne({ userid });

        if (!cart) {
            cart = new cartModel({ userid, product: [] });
        }

        const productAlreadyExist = cart.product.some((item) => item.productid.equals(productid));
        if (productAlreadyExist) {
            return res.status(400).json({ error: "Product already exists in cart" });
        }

        cart.product.push({ productid, price: product.price, quantity: 1 });
        cart.calculateTotalprice(); 
        await cart.save();

        res.status(200).json({ message: "Product added to cart", cart });
    } catch (error) {
        console.error(error);
        res.status(error.status || 500).send({ message: error.message || "Internal Server Error" });
    }
};


const getcart = async (req, res) => {
    try {
        const userid = req.userId;
        const cart = await cartModel.findOne({ userid }).populate("product.productid")
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        res.status(200).json({ message: "Cart found", cart });
    } catch (error) {
        console.log(error)
        res.status(error.status || 500).send({ message: error.message || "internal server error"})
    }
}
const removefromcart = async (req, res) => {
    try {
        const userid = req.userId;
        const productid = req.params.productid;
        let cart = await cartModel.findOne({ userid });
        if (!cart) {
            return res.status(404).json({ error: "Cart not found" });
        }
        cart.product = cart.product.filter((item) => !item.productid.equals(productid))
        cart.calculateTotalprice();
        await cart.save();
        res.status(200).json({ message: "product removed from cart" , cart });

    } catch (error) {
        console.log(error)
        res.status(error.status || 500).send({ message: error.message || "internal server error"})
    }
}


module.exports = {addToCart,getcart , removefromcart}