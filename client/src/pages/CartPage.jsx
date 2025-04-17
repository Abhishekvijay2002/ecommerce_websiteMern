import React, { useState, useEffect } from "react";
import { X, Minus, Plus } from "lucide-react";
import Card from "../components/Card";
import { getCart, removeFromCart } from "../services/UserService";
import { toast } from "sonner";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    getCart()
      .then((res) => {
        console.log("Cart response:", res.data);
        const products = Array.isArray(res.data.cart?.product) ? res.data.cart.product : [];
        setCartItems(products);
        setTotalPrice(res.data.cart?.totalprice || 0);
        toast.success("Cart fetched successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to fetch cart!");
      });
  }, []);

  const handleRemove = (productid) => {
    removeFromCart(productid).then(() => {
        toast.success("Removed from cart successfully!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Failed to remove from cart!");
      });
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="overflow-x-auto mb-10">
        <table className="w-full text-left border-separate border-spacing-y-4">
          <thead>
            <tr className="text-gray-700 font-semibold">
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems?.map((item) => (
              <tr key={item._id} className="bg-gray-50 rounded-lg">
                <td className="flex items-center space-x-4 py-4">
                  <button onClick={() => handleRemove(item.productid._id)} className="text-gray-600 hover:text-gray-800">
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                  <img src={item.productid.image} alt={item.productid.title} className="w-12 h-12 rounded" />
                  <span>{item.productid.title}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <button className="px-2 py-1 border rounded">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button className="px-2 py-1 border rounded">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td>${item.price * item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="w-full md:w-1/3 ml-auto bg-gray-100 p-4 rounded">
        <h3 className="text-lg font-semibold mb-4 border-b pb-2">Cart Total</h3>
        <div className="flex justify-between py-2 border-b">
          <span>SUBTOTAL</span>
          <span>${totalPrice}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>DISCOUNT</span>
          <span>---</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>TOTAL</span>
          <span>${totalPrice}</span>
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 rounded">
          Proceed To Checkout
        </button>
      </div>

      <h1 className="font-black mt-5">You may like this also</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CartPage;
