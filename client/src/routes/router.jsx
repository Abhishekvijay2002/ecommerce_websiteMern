import { createBrowserRouter } from "react-router-dom";
import AboutPage from "../pages/AboutPage.jsx";
import LoginPage from "../pages/shared/LoginPage";
import HomePage from "../pages/HomePage.jsx";
import CategoryPage from "../pages/CategoryPage.jsx";
import ProductPage from "../pages/ProductPage.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import CartPage from "../pages/CartPage.jsx";
import CheckoutPage from "../pages/CheckoutPge.jsx";
import OrderSuccess from "../pages/OrderSuccess.jsx";
import OrderHistory from "../pages/OrderHistory.jsx";
import ProfilePage from "../pages/Profile.jsx";
import SupportHelp from "../pages/Support.jsx";
import RequestPending from "../pages/RequestPending.jsx";
import AdminDashboard from "../pages/admin/AdminPanel.jsx";
import UserLayout from "../layout/UserLayout.jsx";
import SignupPage from "../pages/SignupPage.jsx";
import AdminLayout from "../layout/AdminLayout.jsx";
import BecomeaSeller from "../pages/BecomeaSeller.jsx";
import SellerLayout from "../layout/SellerLayout.jsx";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/category",
        element: <CategoryPage />,
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },

      {
        path: "/productdetails/:productid",
        element: <ProductDetails />,
      },
      {
        path: "/success",
        element: <OrderSuccess />,
      },
      {
        path: "/orderHistory",
        element: <OrderHistory />,
      },

      {
        path: "/support",
        element: <SupportHelp />,
      },
      {
        path: "/request",
        element: <RequestPending />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/becomeSeller",
        element: <BecomeaSeller />,
      }
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
       {
        path: "dashboard",
        element: <div><h1>hiii</h1></div>, // Removed the extra ">"
      },

    ]
  },
  {
    path: "/seller",
    element: <SellerLayout />,
    children: [
       {
        path: "dashboard",
        element: <div><h1>hiii</h1></div>, // Removed the extra ">"
      },

    ]
  },
  {
    path: "*",
    element: <div>404 - Page Not Found</div>,
  },

]);
