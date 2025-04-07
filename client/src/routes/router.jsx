import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/shared/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<HomePage/>,
    },
    {
      path: "/category",
      element:<CategoryPage/>,
    },
    {
      path: "/product",
      element:<ProductPage/>,
    },
    {
      path: "/productdetails",
      element:<ProductDetails/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/signup",
      element: <SignupPage/>,
    },
    {
      path: "/about",
      element: <AboutPage/>,
    },
    {
      path: "*",
      element: <div>404 - Page Not Found</div>,
    },
]);
