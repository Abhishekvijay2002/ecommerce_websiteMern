import React, { useEffect, useState } from "react";
import {
  FaUser,
  FaLock,
  FaCreditCard,
  FaTicketAlt,
  FaStar,
  FaBox,
} from "react-icons/fa";
import { toast } from 'sonner';
import { userDelete, userDetail, userUpdate } from "../services/UserService";

const SidebarButton = ({ label, icon, active, onClick }) => {
  return (
    <button
      className={`flex items-center gap-3 p-3 rounded-md cursor-pointer transition-all w-full
        ${active ? "bg-blue-50 font-semibold text-black" : "text-gray-700 hover:bg-gray-100"}`}
      onClick={onClick}
    >
      <span className="text-lg">{icon}</span>
      {label}
    </button>
  );
};

const ProfilePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState("");

  useEffect(() => {
      userDetail().then((res) => {
        setUserDetails(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user details:", err);
        toast.error("Failed to fetch user data.");
        setLoading(false);
      });
  }, []);

  const handleUpdate = (data) => {
    userUpdate(data).then(() => {
        toast.success("User details updated successfully!");
        setUserDetails((prev) => ({ ...prev, ...data }));
      })
      .catch(() => {
        toast.error("Failed to update user details.");
      });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this user?")) {
userDelete().then(() => {
          toast.success("User account deleted successfully!");
        })
        .catch(() => {
          toast.error("Failed to delete user account.");
        });
    }
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading...</p>;
    }

    switch (activeIndex) {
      case 0:
        return (
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full" />
              <h2 className="text-xl font-semibold text-gray-800">
                {userDetails?.name || "N/A"}
              </h2>
              <p className="text-gray-600">{userDetails?.email || "N/A"}</p>
              <p className="text-gray-600">{userDetails?.phone || "N/A"}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={() => handleUpdate({ name: "Updated Name" })}
              >
                Update
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        );
      case 6:
        return (
          <div>
            <h3 className="text-xl font-semibold">Seller Info</h3>
            <p>Status: {status || "N/A"}</p>
            {/* Add additional seller actions here */}
          </div>
        );
      default:
        return <h2>Feature coming soon...</h2>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex p-10 gap-10">
      {/* Sidebar */}
      <div className="w-64 bg-white rounded-xl shadow-md p-4">
        <div className="space-y-2">
          <SidebarButton
            label="Personal info"
            icon={<FaUser />}
            active={activeIndex === 0}
            onClick={() => setActiveIndex(0)}
          />
          <SidebarButton
            label="Login and security"
            icon={<FaLock />}
            active={activeIndex === 1}
            onClick={() => setActiveIndex(1)}
          />
          <SidebarButton
            label="My payments"
            icon={<FaCreditCard />}
            active={activeIndex === 2}
            onClick={() => setActiveIndex(2)}
          />
          <SidebarButton
            label="My voucher"
            icon={<FaTicketAlt />}
            active={activeIndex === 3}
            onClick={() => setActiveIndex(3)}
          />
          <SidebarButton
            label="My points"
            icon={<FaStar />}
            active={activeIndex === 4}
            onClick={() => setActiveIndex(4)}
          />
          <SidebarButton
            label="My orders"
            icon={<FaBox />}
            active={activeIndex === 5}
            onClick={() => setActiveIndex(5)}
          />
          <SidebarButton
            label="Seller Info"
            icon={<FaBox />}
            active={activeIndex === 6}
            onClick={() => setActiveIndex(6)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;


