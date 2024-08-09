import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layouts/MainLayoute/MainLayoute";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import ErrorPage from "../ErrorPage/ErrorPage";
import PhoneDetails from "../PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayoute></MainLayoute>,
    errorElement: <ErrorPage></ErrorPage>,
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
      {
        path: "/phones/:id",
        element: <PhoneDetails></PhoneDetails>,
        loader : ()=> fetch('/public/phones.json')
      }
    ],
  },
]);

export default router;
