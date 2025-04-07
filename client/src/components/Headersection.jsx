import React from 'react'

const Headersection = () => {
  return (

    <div>
      <header className="bg-lightblue-500 flex items-center p-4 bg-blue-500">
      <div className="w-8 h-8 bg-gray-500 rounded-full mr-4"></div>
      <nav className="flex gap-4 flex-grow">
        <a href="#" className="text-white">About Us</a>
        <a href="#" className="text-white">Bestseller</a>
        <a href="#" className="text-white">New Releases</a>
        <a href="#" className="text-white">Today's Offers</a>
        <a href="#" className="text-white">Become a Seller</a>
      </nav>
      <div className="flex gap-4">
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">h</div>
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">h</div>
        <div className="w-8 h-8 bg-white rounded-full flex justify-center items-center">yy</div>
      </div>
    </header>
    </div>
  )
}

export default Headersection
