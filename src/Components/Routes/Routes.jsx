import { createBrowserRouter } from "react-router-dom";
import MainLayoute from "../Layouts/MainLayoute/MainLayoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayoute></MainLayoute>
    }
])

export default router;