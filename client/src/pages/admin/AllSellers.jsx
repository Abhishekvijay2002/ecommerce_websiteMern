import React from 'react'
import { useState, useEffect } from 'react';
import { toast } from 'sonner';
import { getAllSellers } from '../../services/UserService';

function AllSellers() {
    const [sellers, setseller] = useState([]);

    useEffect(() => {
        getAllSellers()
            .then((res) => {
                console.log(res.data);
                setseller(res.data); // Ensure data structure is correct
                toast.success("Users Fetched");
            })
            .catch((err) => {
                console.log(err);
                toast.error("Error Fetching Users");
            });
    }, []);
  return (
    <div>
      <div className="p-6 bg-gray-100 min-h-full">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">All Sellers</h2>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full bg-white border rounded-lg">
                    <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
                        <tr>
                            <th className="py-3 px-6 text-left">Name</th>
                            <th className="py-3 px-6 text-left">Email</th>
                            {/* <th className="py-3 px-6 text-left">Role</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {sellers.length > 0 ? (
                            sellers.map((seller) => (
                                <tr key={seller._id} className="border-b border-gray-300 hover:bg-gray-100 transition">
                                    <td className="py-3 px-6">{seller.name}</td>
                                    <td className="py-3 px-6">{seller.email}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="py-3 px-6 text-center text-gray-500">
                                    No Sellers available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default AllSellers
