import React, { useEffect, useState } from "react";

const mockDashboardData = {
  users: 1200,
  sellers: 150,
  products: 450,
  revenue: "$50,000",
  pendingReviews: 24,
  newUsers: 30,
  bestSellingProducts: [
    { id: 1, name: "Wireless Headphones", sales: 1500 },
    { id: 2, name: "Smartwatch", sales: 1200 },
    { id: 3, name: "Bluetooth Speaker", sales: 950 },
  ],
};

const views = [
  "Dashboard",
  "Manage Products",
  "Manage User",
  "Manage Seller",
  "Reviews",
  "Order Management",
  "Payment History",
  "Add Product"
];

export default function AdminDashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [activeView, setActiveView] = useState("Dashboard");

  useEffect(() => {
    setTimeout(() => {
      setDashboardData(mockDashboardData);
    }, 500);
  }, []);

  if (!dashboardData) return <div className="p-6">Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-60 bg-gray-200 p-4 flex flex-col justify-between">
        <div>
          <ul className="space-y-4">
            {views.map((item) => (
              <li
                key={item}
                onClick={() => setActiveView(item)}
                className={`flex items-center space-x-2 font-medium cursor-pointer ${activeView === item ? "text-blue-600" : "text-black"}`}
              >
                <div className="w-4 h-4 bg-black rounded-full" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>👤</span>
            <span className="font-semibold">Account Details</span>
          </div>
          <div className="flex items-center space-x-2 cursor-pointer">
            <span>⏻</span>
            <span className="font-semibold">Login Out</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {activeView === "Dashboard" && (
          <>
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded shadow">No Of Users: <span className="font-bold">{dashboardData.users}</span></div>
              <div className="bg-white p-4 rounded shadow">No Of Sellers: <span className="font-bold">{dashboardData.sellers}</span></div>
              <div className="bg-white p-4 rounded shadow">No Of Products: <span className="font-bold">{dashboardData.products}</span></div>
              <div className="bg-white p-4 rounded shadow">Revenue Earned: <span className="font-bold">{dashboardData.revenue}</span></div>
              <div className="bg-white p-4 rounded shadow">Reviews Pending: <span className="font-bold">{dashboardData.pendingReviews}</span></div>
              <div className="bg-white p-4 rounded shadow">New Users (7 Days): <span className="font-bold">{dashboardData.newUsers}</span></div>
            </div>

            <h2 className="text-xl font-semibold mb-4">Best Selling Products</h2>
            <div className="space-y-4">
              {dashboardData.bestSellingProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-4 rounded shadow flex justify-between items-center"
                >
                  <span>{product.name}</span>
                  <span className="font-bold">Sales: {product.sales}</span>
                </div>
              ))}
            </div>
          </>
        )}

        {activeView !== "Dashboard" && (
          <div className="text-lg font-semibold">{activeView} Page Content Coming Soon...</div>
        )}
      </main>
    </div>
  );
}

