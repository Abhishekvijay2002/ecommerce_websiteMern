import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { userLogout } from '../services/UserService';
import { toast } from 'sonner';
import { MdShoppingCart } from "react-icons/md";

const Headersection = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  
  const userToken = Cookies.get('user_token') || null;
  const sellerToken = Cookies.get('seller_token') || null;
  const userName = Cookies.get('user_name') || 'User';

  const handleLogout = () => {
    try {
      userLogout().then((res) => {
        toast.success("logout successful!");
        navigate('/');

      })
    } catch (error) {
      console.log(error);
      toast.error("logout failed!");

    }
   
  };

  return (
    <header className="bg-blue-500 flex items-center justify-between px-6 py-4">
      {/* Left section - Logo */}
      <div className="text-white font-bold text-lg mr-5">
        <Link to="/" aria-label="Home">MyShop</Link>
      </div>

      {/* Center nav items */}
      <nav className="flex gap-6">
        <Link to="/about" className="text-white" aria-label="About Us">About Us</Link>
        <Link to="/best-selling" className="text-white" aria-label="Best Selling">Best Selling</Link>
        <Link to="/new-releases" className="text-white" aria-label="New Releases">New Releases</Link>
        <Link to="/offers" className="text-white" aria-label="Today's Offers">Today's Offers</Link>

        {userToken && !sellerToken && location.pathname !== "/becomeSeller" && (
          <Link to="/becomeSeller" className="text-white font-medium" aria-label="Become a Seller">Become a Seller</Link>
        )}

        {userToken && !sellerToken && location.pathname === "/becomeSeller" && (
          <Link to="/" className="text-white font-medium" aria-label="Go Home">Go Home</Link>
        )}

        {sellerToken && location.pathname !== "/seller/dashboard" && (
          <Link to="/seller/dashboard" className="text-white font-medium" aria-label="Seller Dashboard">Seller Dashboard</Link>
        )}
      </nav>

      {/* Right section - Cart / Login or Profile */}
      <div className="flex items-center gap-4">
        <Link to="/cart" className="text-white" aria-label="Cart"><MdShoppingCart /></Link>

        {userToken ? (
          <div className="relative">
            <button 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="text-white" 
              aria-haspopup="true" 
              aria-expanded={dropdownOpen}
            >
              👤 {userName}
            </button>
            {dropdownOpen && (
              <div 
                className="absolute right-0 bg-white text-black rounded shadow-md mt-2 py-2 w-40" 
                role="menu"
              >
                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">Profile</Link>
                <Link to="/orderHistory" className="block px-4 py-2 hover:bg-gray-100" role="menuitem">My Orders</Link>
                <button 
                  onClick={handleLogout} 
                  className="block px-4 py-2 hover:bg-gray-100 w-full text-left" 
                  role="menuitem"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" className="text-white" aria-label="Login">Login</Link>
        )}
      </div>
    </header>
  );
};

export default Headersection;





