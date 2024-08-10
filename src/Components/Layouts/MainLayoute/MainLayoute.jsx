import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Navbar/Navbar";
import { useEffect } from "react";


const MainLayoute = () => {
    const location = useLocation()
    useEffect(()=>{
        if(location.pathname === "/"){
            document.title =`phone-home`
        }else{
            document.title = `phone-${location.pathname.replace('/','')}`
        }
        if(location.state){
            document.title = `phone-${location.state}`
        }
    },[location.pathname])
    return (
        <div className="px-14">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayoute;