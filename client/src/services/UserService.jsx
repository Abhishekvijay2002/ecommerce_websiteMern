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
   return axiosInstance.get("/user//getuser");
};
export const userUpdate = (data) => {
   return axiosInstance.put("/user/update", data);
}
export const userDelete = () => {
   return axiosInstance.delete("/user/delete");
}
//product
export const listProducts = () => {
   return axiosInstance.get("/product/getproducts");
};
export const Getproductbyid = (productid) => {
   console.log("Calling API with productid:", productid);
   return axiosInstance.get(`/product/getdetail/${productid}`);
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
