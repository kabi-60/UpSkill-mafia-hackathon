import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import BuyerDashboard from "./pages/BuyerDashboard.jsx";
import Home from "./pages/Home.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import Post from "./pages/Post.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import OrderPage from "./pages/OrderPage.jsx";
import OrderConfirmation from "./pages/OrderConfirmation.jsx";
import UpdateOrder from "./pages/UpdateOrder.jsx";

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <Root />,
  // },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
  {
    path: "/user/dashboard",
    element: <UserDashboard />,
  },
  {
    path: "/buyer/dashboard",
    element: <BuyerDashboard />,
  },
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <ProductsPage />,
  },
  {
    path: "/post",
    element: <Post />,
  },
  {
    path: "/order",
    element: <OrderPage />,
  },
  {
    path: "/productdetails",
    element: <ProductDetails />,
  },
  {
    path: "/orderconfirmation",
    element: <OrderConfirmation />,
  },
  {
    path: "/updateorder",
    element: <UpdateOrder />,
  },
]);

export default router;
