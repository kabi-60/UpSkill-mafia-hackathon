import { createBrowserRouter } from "react-router-dom";

import Root from "./pages/Root";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
]);

export default router;
