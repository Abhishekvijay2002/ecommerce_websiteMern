import React, { useState } from "react";

const CheckoutPage = () => {
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState("");

  const addresses = [
    {
      id: 1,
      name: "Flipkart Warehouse",
      address: "Warehouse No. 24, Industrial Zone, Bangalore, KA 560100",
    },
    {
      id: 2,
      name: "Amazon India Office",
      address: "8th Floor, World Trade Center, Pune, MH 411014",
    },
  ];

  return (
    <div>
    <div className="p-6 max-w-3xl mx-auto">
      {/* Delivery Address */}
      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
        {addresses.map((addr) => (
          <label
            key={addr.id}
            className="flex items-start mb-4 cursor-pointer"
          >
            <input
              type="radio"
              name="address"
              className="mt-1 mr-3"
              checked={selectedAddress === addr.id}
              onChange={() => setSelectedAddress(addr.id)}
            />
            <div>
              <p className="font-medium">{addr.name}</p>
              <p className="text-sm text-gray-700">{addr.address}</p>
            </div>
          </label>
        ))}
        <button
          className="bg-gray-700 text-white px-4 py-2 rounded-full mt-2 hover:bg-gray-800"
          onClick={() => setShowAddressForm(!showAddressForm)}
        >
          {showAddressForm ? "Close Address Form" : "Add New Address"}
        </button>

        {showAddressForm && (
          <div className="mt-4 space-y-2">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Address"
              className="w-full p-2 border rounded"
            ></textarea>
            <input
              type="text"
              placeholder="City"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="State"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Zip Code"
              className="w-full p-2 border rounded"
            />
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Save Address
            </button>
          </div>
        )}
      </div>

      {/* Payment Method */}
      <div className="bg-gray-100 rounded-xl p-6 mb-6">
        <h2 className="text-lg font-semibold mb-4">Payment Details</h2>

        <label className="flex items-center mb-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            className="mr-3"
            value="card"
            checked={selectedPayment === "card"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Credit Card / Debit Card
        </label>

        {selectedPayment === "card" && (
          <div className="pl-6 space-y-2">
            <input
              type="text"
              placeholder="Cardholder Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              placeholder="Card Number"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Expiry Date"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="CVV"
                className="w-1/2 p-2 border rounded"
              />
            </div>
          </div>
        )}

        <label className="flex items-center my-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            className="mr-3"
            value="netbanking"
            checked={selectedPayment === "netbanking"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          Internet Banking
        </label>

        {selectedPayment === "netbanking" && (
          <div className="pl-6">
            <select className="w-full p-2 border rounded">
              <option>Select Your Bank</option>
              <option>HDFC</option>
              <option>SBI</option>
              <option>ICICI</option>
              <option>Axis</option>
            </select>
          </div>
        )}

        <label className="flex items-center mt-3 cursor-pointer">
          <input
            type="radio"
            name="payment"
            className="mr-3"
            value="upi"
            checked={selectedPayment === "upi"}
            onChange={(e) => setSelectedPayment(e.target.value)}
          />
          UPI Apps
        </label>

        {selectedPayment === "upi" && (
          <div className="pl-6 space-y-2 mt-2">
            <input
              type="text"
              placeholder="Enter UPI ID"
              className="w-full p-2 border rounded"
            />
            <div className="flex space-x-2">
              <button className="bg-purple-100 px-3 py-1 rounded">PhonePe</button>
              <button className="bg-blue-100 px-3 py-1 rounded">Google Pay</button>
              <button className="bg-gray-200 px-3 py-1 rounded">Paytm</button>
            </div>
          </div>
        )}
      </div>

      {/* Checkout Button */}
      <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-900">
        Proceed to Checkout
      </button>
    </div>
    </div>
  );
};

export default CheckoutPage;
