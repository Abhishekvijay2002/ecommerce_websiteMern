import React from 'react'
import { useNavigate } from "react-router-dom";

function Card({product}) {
  const navigate = useNavigate();
  const fallbackProduct = {
    id: 1,
    image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-card-40-pro-202405?wid=680&hei=528&fmt=p-jpg&qlt=95&.v=1713920820026",
    title: "Demo Product",
    price: 120,
  };
  const handleClick = () => {
    navigate(`/productdetails/${product._id}`);
  };
const Product = product || fallbackProduct; // Fallback to demo product if none is provided
  return (
    <div  onClick={handleClick} className="max-w-80 rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow">
    <img
      className="w-full h-80 object-cover"
      src={Product.image}
      alt="Sample Product"
    />
    {/* Content */}
    <div className="p-4 text-center">
      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-800">{Product.title}</h2>
      {/* Price */}
      <p className="text-sm text-gray-500 mt-2">₹{Product.price}</p>
    </div>
  </div>
  )
}

export default Card
