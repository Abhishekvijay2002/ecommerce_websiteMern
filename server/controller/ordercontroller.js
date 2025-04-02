const Order = require('../models/orderModel');
const Cart = require('../models/cartModels'); 

const addOrder = async (req, res) => {
    try {
        const { address, paymentMethod } = req.body;

        const cart = await Cart.findOne({ userid: req.userId }).populate("product.productid");

        if (!cart || cart.product.length === 0) {
            return res.status(400).json({ message: "Cart is empty" });
        }

        const totalAmount = cart.product.reduce((sum, item) => sum + item.price * item.quantity, 0);

        const order = new Order({
            userId: req.userId,
            product: cart.product.map(item => ({
                productid: item.productid,
                price: item.price,
                quantity: item.quantity
            })),
            totalamount: totalAmount,
            address,
            paymentMethod,
            orderstatus: 'pending'
        });

        await order.save();
        await Cart.findOneAndDelete({ userid: req.userId });

        res.status(201).json({ message: "Order placed successfully", order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// const getAllOrders = async (req, res) => {
//     try {
//         const orders = await Order.find().populate("userId", "name email"); 
//         res.json(orders);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { orderstatus } = req.body;

        const updatedOrder = await Order.findByIdAndUpdate(id, { orderstatus }, { new: true });
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }

        res.status(200).json({ message: 'Order updated successfully', order: updatedOrder });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update order', details: error.message });
    }
};
const cancelOrder = async (req, res) =>  { 
        try {
            const order = await Order.findById(req.params.id);

            if (!order) {
                return res.status(404).json({ message: "Order not found" });
            }

            if (order.orderstatus !== "pending") {
                return res.status(400).json({ message: "Order cannot be canceled" });
            }
            order.orderstatus = "cancelled";
            await order.save();
            res.status(200).json({ message: "Order cancelled successfully", order });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    
module.exports = {
    addOrder,
getOrders,
    updateOrder,
    cancelOrder,
};
