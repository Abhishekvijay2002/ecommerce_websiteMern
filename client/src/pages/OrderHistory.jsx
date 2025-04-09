import React from 'react';
import FooterSections from '../components/Footer';
import Headersection from '../components/Headersection';

const orders = [
  {
    orderNo: '#1001',
    items: 'Wireless Mouse, Keyboard',
    status: 'Delivered',
    trackingId: 'TRK123456',
    deliveryDate: '05 Apr 2025',
    price: '₹1,599',
  },
  {
    orderNo: '#1002',
    items: 'Laptop Stand',
    status: 'Shipped',
    trackingId: 'TRK789101',
    deliveryDate: '08 Apr 2025',
    price: '₹899',
  },
  {
    orderNo: '#1003',
    items: 'Headphones',
    status: 'Processing',
    trackingId: '-',
    deliveryDate: '-',
    price: '₹2,499',
  },
];

const statusColor = {
  Delivered: 'text-green-600',
  Shipped: 'text-yellow-600',
  Processing: 'text-blue-600',
};

const OrderHistory = () => {
  return (
    <div>
        <Headersection/>
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 rounded-lg">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="py-3 px-4 text-left">Order No</th>
              <th className="py-3 px-4 text-left">Items</th>
              <th className="py-3 px-4 text-left">Status</th>
              <th className="py-3 px-4 text-left">Tracking ID</th>
              <th className="py-3 px-4 text-left">Delivery Date</th>
              <th className="py-3 px-4 text-left">Price</th>
            </tr>
          </thead>
          <tbody className="bg-white text-gray-700">
            {orders.map((order, index) => (
              <tr key={index} className="border-t hover:bg-gray-100">
                <td className="py-3 px-4">{order.orderNo}</td>
                <td className="py-3 px-4">{order.items}</td>
                <td className={`py-3 px-4 font-semibold ${statusColor[order.status]}`}>
                  {order.status}
                </td>
                <td className="py-3 px-4">{order.trackingId}</td>
                <td className="py-3 px-4">{order.deliveryDate}</td>
                <td className="py-3 px-4">{order.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <FooterSections/>
    </div>
  );
};

export default OrderHistory;
