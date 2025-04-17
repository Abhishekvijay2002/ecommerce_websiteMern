import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { listProducts } from '../services/UserService'

function ProductPage() {
  const [products, setproducts] = useState([])
    useEffect(() => {
    listProducts().then((res) => {
      setproducts(res.data);
      console.log(res.data)
    }).catch((err) => console.log(err)
  )
  },[])
  return (
    <div>
    <div className="flex p-4">
      {/* Sidebar */}
      <aside className="w-1/4 p-4 bg-gray-100 border border-gray-300 rounded">
        {/* Categories Section */}
        <div className="mb-6">
          <h2 className="font-bold text-lg mb-2">Categories</h2>
          <ul>
            <li className="flex justify-between items-center py-2 border-b">
              Lorem ipsum (3) <span>&#9660;</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b">
              Lorem ipsum (3) <span>&#9660;</span>
            </li>
            <li className="flex justify-between items-center py-2 border-b">
              Lorem ipsum (3) <span>&#9660;</span>
            </li>
            <li className="flex justify-between items-center py-2">
              Lorem ipsum (3) <span>&#9660;</span>
            </li>
          </ul>
        </div>

        {/* Price Section */}
        <div>
          <h2 className="font-bold text-lg mb-2">Price</h2>
          <ul>
            <li className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> $20.00 - $50.00
            </li>
            <li className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> $20.00 - $50.00
            </li>
            <li className="flex items-center mb-2">
              <input type="checkbox" className="mr-2" /> $20.00 - $50.00
            </li>
            <li className="flex items-center">
              <input type="checkbox" className="mr-2" /> $20.00 - $50.00
            </li>
          </ul>
        </div>
      </aside>

      {/* Products Grid */}
      <main className="w-3/4 p-4">
        <div className="text-gray-700 mb-4">Showing 1–12 of 24 item(s)</div>
        <div className="grid grid-cols-3 gap-4">

            {products.length > 0 ? (
        products.map((product ,i) => (
          <Card key={i} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
      
        </div>
        <div className="text-gray-700 mb-4 text-center mt-5">
    Showing 1–12 of 24 item(s)
  </div>
  <hr className="border-t border-gray-300 mb-4" />
  <div className="flex justify-center mt-4">
  <button
    className="px-4 py-2 bg-black text-white font-medium rounded-4xl"
  >
    Load More <span className="ml-2">&#10140;</span>
  </button>
</div>

      </main>
    </div>
    </div>
  )
}

export default ProductPage
