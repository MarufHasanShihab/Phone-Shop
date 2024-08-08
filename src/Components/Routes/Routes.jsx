import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layouts/MainLayoute/MainLayoute";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute></MainLayoute>,
    errorElement: 
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/public/phones.json')
      },
      {
        path: "/favorites",
        element: <Favorites></Favorites>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default router;
