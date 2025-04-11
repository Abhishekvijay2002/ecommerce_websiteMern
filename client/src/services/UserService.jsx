import { axiosInstance } from "../Axios/Axiosinstance"

export const userLogin = (data) => {
    return axiosInstance.post("/user/login",data );
       };

 export const userRegister = (data) => {
        return axiosInstance.post("/user/register",data );
           };
        
    