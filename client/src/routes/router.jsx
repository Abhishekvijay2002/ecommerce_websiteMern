import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage";
import LoginPage from "../pages/shared/LoginPage";
import SignupPage from "../pages/SignupPage";
import HomePage from "../pages/HomePage";
import CategoryPage from "../pages/CategoryPage";
import ProductPage from "../pages/ProductPage";
import ProductDetails from "../pages/ProductDetails";
import CartPage from "../pages/CartPage";
import CheckoutPage from "../pages/CheckoutPge";
import OrderSuccess from "../pages/OrderSuccess.jsx";
import OrderHistory from "../pages/OrderHistory.jsx";
import ProfilePage from "../pages/Profile.jsx";
import SupportHelp from "../pages/Support.jsx";
import RequestPending from "../pages/RequestPending.jsx";
import AdminDashboard from "../pages/AdminPanel.jsx";

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
      path: "/cart",
      element:<CartPage/>,
    },
    {
      path: "/productdetails",
      element:<ProductDetails/>,
    },
    {
      path: "/success",
      element:<OrderSuccess/>,
    },
    {
      path: "/orderHistory",
      element:<OrderHistory/>,
    },
    {
      path: "/support",
      element:<SupportHelp/>,
    },
    {
      path: "/admin",
      element:<AdminDashboard/>,
    },
    {
      path: "/request",
      element:<RequestPending/>,
    },
    {
      path: "/profile",
      element:<ProfilePage/>,
    },
    {
      path: "/checkout",
      element:<CheckoutPage/>,
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
