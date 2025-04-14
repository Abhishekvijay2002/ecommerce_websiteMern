import React, { useState } from "react";
import {
  FaUser,
  FaLock,
  FaCreditCard,
  FaTicketAlt,
  FaStar,
  FaBox,
} from "react-icons/fa";

const menuItems = [
  { label: "Personal info", icon: <FaUser /> },
  { label: "Login and security", icon: <FaLock /> },
  { label: "My payments", icon: <FaCreditCard /> },
  { label: "My voucher", icon: <FaTicketAlt /> },
  { label: "My points", icon: <FaStar /> },
  { label: "My orders", icon: <FaBox /> },
];

const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
    <div className="min-h-screen bg-gray-50 flex p-10 gap-10">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-xl shadow-md p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all 
                ${
                  activeIndex === index
                    ? "bg-blue-50 font-semibold text-black"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              onClick={() => setActiveIndex(index)}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1">
        <h2 className="text-2xl font-semibold mb-6">Personal Details</h2>
        <div className="w-full max-w-xl h-96 border border-gray-300 rounded-md bg-white" />
      </div>
    </div>
    </div>
  );
};

export default ProfilePage;
