import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
      },
    ],
  },
  {
    path: "/auth",
    element: <h2>Authentication Pgae</h2>,
  },
  {
    path: "/news",
    element: <h2>News Pgae</h2>,
  },
  {
    path: "/*",
    element: <h2>Error Pgae</h2>,
  },
]);

export default router;
