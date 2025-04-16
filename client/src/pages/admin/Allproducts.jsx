import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { listProducts } from '../../services/UserService';
function Allproducts() {
    const [products, setproducts] = useState([])
    useEffect(() => {
        listProducts().then((res) => {
            setproducts(res.data);
            console.log(res.data)
            toast.success("Products Fetched")
        }).catch((err) => {
            console.log(err)
            toast.error("Error Fetching Products")
        }
        )
    }, [])
    return (
        <div>
            <div>
                <div className="p-6 bg-gray-100 min-h-full">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Sellers</h2>
                    <div className="overflow-x-auto shadow-lg rounded-lg">
                        <table className="min-w-full bg-white border rounded-lg">
                            <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                                <tr>
                                    <th className="py-3 px-6 text-left">Product Name</th>
                                    <th className="py-3 px-6 text-left">CateGory</th>
                                    <th className="py-3 px-6 text-left">price</th>
                                    {/* <th className="py-3 px-6 text-left">Seller</th> */}
                                    {/* <th className="py-3 px-6 text-left">Stock</th>
                            <th className="py-3 px-6 text-left">Rating</th> */}
                                    <th className="py-3 px-6 text-left">image</th>
                                    <th className="py-3 px-6 text-left">Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                {products.length > 0 ? (
                                    products.map((product) => (
                                        <tr key={product._id} className="border-b border-gray-300 hover:bg-gray-100 transition">
                                            <td className="py-3 px-6">{product.title}</td>
                                            <td className="py-3 px-6">{product.category}</td>
                                            <td className="py-3 px-6 text-yellow-600 font-medium">{product.price}</td>
                                            <td className="py-3 px-6">
                                                <img src={product.image} alt="Product" className="w-16 h-16 object-cover rounded-lg" />
                                            </td>


                                            <td className="py-3 px-6 text-center">
                                                <div className="flex justify-center gap-2">
                                                    <button
                                                        // onClick={() => handleApprove(request._id)}
                                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition"
                                                    >
                                                        view Details
                                                    </button>
                                                    <button
                                                        // onClick={() => handlereject(request._id)}
                                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                                    >
                                                        delete
                                                    </button>
                                                    <button
                                                        // onClick={() => handlereject(request._id)}
                                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
                                                    >
                                                        edit
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="4" className="py-3 px-6 text-center text-gray-500">
                                            No products available
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Allproducts
