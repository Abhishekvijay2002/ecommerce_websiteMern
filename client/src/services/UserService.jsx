import { axiosInstance } from "../Axios/Axiosinstance"
//user
export const userLogin = (data) => {
   return axiosInstance.post("/user/login", data);
};
export const userLogout = () => {
    return axiosInstance.post("/user/logout");
   }; 

export const userRegister = (data) => {
   return axiosInstance.post("/user/register", data);
};
export const userDetail = () => {
   return axiosInstance.get("/user/getuser");
};
export const userUpdate = (data) => {
   return axiosInstance.put("/user/update", data);
}
export const userDelete = (id) => {
   return axiosInstance.delete(`/user/delete/${id}`);
}
export const GetAllUsers = () => {
   return axiosInstance.get("/user/allusers");
};
//product
export const listProducts = () => {
   return axiosInstance.get("/product/getproducts");
};
export const Getproductbyid = (productid) => {
   return axiosInstance.get(`/product/getdetail/${productid}`);
};
export const AddProduct = (data) => {
   return axiosInstance.post("/product/create", data);
};
export const UpdateProductbyid = (productid, data) => {
   return axiosInstance.put(`/product/update/${productid}`, data);
};
export const DeleteProduct = (productid) => {
   return axiosInstance.delete(`/product/delete/${productid}`);
};

//seller
export const RequestToBecomeaSeller = () => {
   return axiosInstance.post("/seller/request");
};
export const GetSellerStatus = () => {
   return axiosInstance.get("/seller/status");
};
export const CancelSellerRequest = () => {
   return axiosInstance.delete("/seller/cancelrequest");
};
export const getAllsellerRequests = () => {
   return axiosInstance.get("/seller/requests");
};

export const getsellerRequestById = (id) => {
   return axiosInstance.get(`/seller/request/${id}`);
};

export const approveSellerRequest = (id) => {
   return axiosInstance.put(`/seller/requests/approve/${id}`);
};

export const rejectSellerRequest = (id) => {
   return axiosInstance.put(`/seller/requests/reject/${id}`);
};
export const getAllSellers = () => {
   return axiosInstance.get("/seller/allsellers");
};
export const removeSeller = (id) => {
   return axiosInstance.delete(`/seller/remove/${id}`);
};
// cart
export const addToCart = (productid) => {
   return axiosInstance.post(`/cart/addtocart/${productid}`);
};
export const getCart = () => {
   return axiosInstance.get("/cart/getcart");
};
export const removeFromCart = (productid) => {
   return axiosInstance.delete(`/cart/removecart/${productid}`);
};
// order
export const addOrder = (data) => {
   return axiosInstance.post("/order/add", data);
};
export const getOrders = () => {
   return axiosInstance.get("/order/userorders");
};
export const cancelOrder = (orderid) => {
   return axiosInstance.delete(`/order/cancel/${orderid}`);
};
export const updateOrder = (orderid, data) => {
   return axiosInstance.patch(`/order/update/${orderid}`, data);
};
export const getAllOrders = () => {
   return axiosInstance.get("/order/allorders");
}

//review
export const addReview = (productId, data) => {
   return axiosInstance.post(`/review/add/${productId}`, data);
};
export const getReviewsByProduct = (productId) => {
   return axiosInstance.get(`/review/${productId}`);
};
export const addReply = (reviewId, data) => {
   return axiosInstance.post(`/review/reply/${reviewId}`, data);
};
export const deleteReview = (reviewId) => {
   return axiosInstance.delete(`/review/${reviewId}`);
};
export const getAllReviews = () => {
   return axiosInstance.get("/review/allreviews");
};