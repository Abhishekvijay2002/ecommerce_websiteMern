import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useParams } from "react-router-dom";
import { Getproductbyid } from "../services/UserService";

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [reviews, setReviews] = useState([
    { name: "John Doe", rating: 4, comment: "Great product!" },
    { name: "Jane Smith", rating: 5, comment: "Loved it! Highly recommend." }
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const images = ["https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-1-202409?wid=728&hei=666&fmt=png-alpha&.v=1725019651758",
     "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-2-202503_GEO_IN?wid=728&hei=666&fmt=png-alpha&.v=1740770452496",
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-4-202503?wid=728&hei=666&fmt=png-alpha&.v=1740102225921", 
      "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/watch-s10-digitalmat-gallery-5-202503?wid=728&hei=666&fmt=png-alpha&.v=1740102223675"];

      const {productid} = useParams()
      console.log(productid  , "productid getfrom params")
     
      const[product ,setProduct] =useState([]);

    useEffect(() => {
    Getproductbyid(productid).then((res) => {
      setProduct(res.data);
      console.log(res.data)
    }).catch((err) => console.log(err)
  )

  },[productid])
  const handleAddReview = () => {
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <div>
    <div className="p-6 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img
            src={product.images}
            alt="Selected"
            className="w-80 h-80 object-cover rounded"
          />
          <div className="flex mt-4 space-x-2">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                onClick={() => setSelectedImage(index)}
                className={`w-30 h-30 object-cover rounded cursor-pointer border-2 ${
                  selectedImage === index ? "border-black" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">{product.price}</span>
            <div className="flex text-yellow-500">
            </div>
            <span className="text-sm text-gray-500">32 reviews</span>
          </div>
          <p className="mt-4 text-gray-600">
           {product.description}
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Consectetur adipisicing elit</li>
            <li>Voluptatum obcaecati officiis</li>
            <li>Consequatur deleniti suscipit</li>
          </ul>
          <div className="mt-4 flex space-x-2">
            <button className="px-4 py-2 bg-gray-200 rounded">Add to Cart</button>
            <button className="px-4 py-2 bg-black text-white rounded">Buy Now</button>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="border-b flex space-x-6 text-lg">
          <button onClick={() => setActiveTab("description")} className={`${activeTab === "description" ? "font-bold" : "text-gray-600"}`}>Description</button>
          <button onClick={() => setActiveTab("reviews")} className={`${activeTab === "reviews" ? "font-bold" : "text-gray-600"}`}>Reviews</button>
        </div>
        <div className="mt-4">
          {activeTab === "description" ? (
            <div>
              <p className="text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis eaque tempora incidunt. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <ul className="list-disc list-inside mt-4 text-gray-600">
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipisicing elit</li>
                <li>Sed do eiusmod tempor incididunt</li>
                <li>Ut labore et dolore magna aliqua</li>
              </ul>
            </div>
          ) : (
            <div>
              <div className="space-y-4">
                {reviews.map((r, i) => (
                  <div key={i} className="border p-4 rounded">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{r.name}</h4>
                      <div className="flex text-yellow-500">
                      </div>
                    </div>
                    <p className="mt-2 text-gray-700">{r.comment}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h4 className="font-bold text-lg mb-2">Add a Review</h4>
                <input
                  type="text"
                  placeholder="Your name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  className="w-full border p-2 rounded mb-2"
                />
                <textarea
                  placeholder="Your review"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full border p-2 rounded mb-2"
                ></textarea>
                <select
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: parseInt(e.target.value) })}
                  className="w-full border p-2 rounded mb-2"
                >
                  <option value={0}>Select Rating</option>
                  {[1, 2, 3, 4, 5].map((val) => (
                    <option key={val} value={val}>{val} Star{val > 1 && 's'}</option>
                  ))}
                </select>
                <button
                  onClick={handleAddReview}
                  className="px-4 py-2 bg-black text-white rounded"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    <h1 className="font-black mt-5">Similar Products</h1>
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 p-4'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
    </div>
    </div>
  );
};

export default ProductDetails;


