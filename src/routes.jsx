import { createBrowserRouter } from "react-router-dom";

import { isDev } from "./constants/utils.js";

import RoutesPage from "./pages/RoutesPage.jsx";
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
import Team from "./pages/Team.jsx";
import About from "./pages/About.jsx";


const router = createBrowserRouter([
  {
    path: "/routes",
    element: isDev ? <RoutesPage /> : <></>,
  },
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
  {
    path: "/team",
    element: <Team />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
