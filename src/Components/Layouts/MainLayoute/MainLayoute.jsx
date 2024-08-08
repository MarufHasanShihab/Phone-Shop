import { Outlet } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";


const MainLayoute = () => {
    return (
        <div className="px-14">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoute;