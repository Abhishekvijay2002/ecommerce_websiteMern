import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Getproductbyid, UpdateProductbyid } from "../../services/UserService";

const UpdateProduct = () => {


  const { productid } = useParams();
  console.log(productid);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    category: "",
    image: null,
  });

  useEffect(() => {
    Getproductbyid(productid).then((res) => {
      const { title, description, price, stock, category } = res.data;
      setFormData((prev) => ({
        ...prev,
        title,
        description,
        price,
        stock,
        category,
      }));
    }).catch((error) => {
      console.error("Error fetching product:", error);
    });
  }, [productid]);

  const handleChange = (e) => {
    if (e.target.name === "image") {
      setFormData({ ...formData, image: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, formData[key]);
      });

      const response = await UpdateProductbyid(productid, data);
      console.log(response.data);
      alert("Product updated successfully!");
    } catch (error) {
      alert(error.response?.data?.message || "Update failed");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-8 border border-gray-300 rounded-2xl shadow-md bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4" encType="multipart/form-data">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="number"
          name="stock"
          value={formData.stock}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
        />
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full p-3 border rounded-lg focus:outline-none"
        />
        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition duration-200"
        >
          Update Product
        </button>
      </form>
    </div>
  );
};

export default UpdateProduct;
