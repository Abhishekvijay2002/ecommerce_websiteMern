import React, { useState } from "react";
import { X, Minus, Plus } from "lucide-react";
import Card from "../components/Card";

const CartPage = () => {
  const initialCart = [
    { id: 1, name: "Double Bed & Dressing", price: 180, quantity: 1 },
    { id: 2, name: "Double Bed & Dressing", price: 180, quantity: 1 },
    { id: 3, name: "Double Bed & Dressing", price: 180, quantity: 1 },
    { id: 4, name: "Double Bed & Dressing", price: 180, quantity: 1 },
  ];

  const [cartItems, setCartItems] = useState(initialCart);

  const handleQuantityChange = (id, amount) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div>
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
            {cartItems.map((item) => (
              <tr key={item.id} className="bg-gray-50 rounded-lg">
                <td className="flex items-center space-x-4 py-4">
                  <button onClick={() => handleRemove(item.id)}>
                    <X className="w-5 h-5 text-gray-600" />
                  </button>
                  <div className="w-12 h-12 bg-gray-300 rounded"></div>
                  <span>{item.name}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="px-2 py-1 border rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="px-2 py-1 border rounded"
                    >
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
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span>DISCOUNT</span>
          <span>---</span>
        </div>
        <div className="flex justify-between py-2 font-semibold">
          <span>TOTAL</span>
          <span>${subtotal}</span>
        </div>
        <button className="w-full mt-4 bg-black text-white py-2 rounded">
          Proceed To Checkout
        </button>
      </div>
      <h1 className="font-black mt-5">You may like this also</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
    </div>
  );
};

export default CartPage;
