import React from 'react'

function Card() {
  return (
    <div className="max-w-80 rounded overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow">
    {/* Image */}
    <img
      className="w-full h-80 object-cover"
      src="https://static0.anpoimages.com/wordpress/wp-content/uploads/2025/01/s25-square.png"
      alt="Sample Product"
    />
    {/* Content */}
    <div className="p-4 text-center">
      {/* Product Name */}
      <h2 className="text-lg font-semibold text-gray-800">Sample Product</h2>
      {/* Price */}
      <p className="text-sm text-gray-500 mt-2">₹499</p>
    </div>
  </div>
  )
}

export default Card
