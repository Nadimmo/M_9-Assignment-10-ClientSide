import { Outlet } from "react-router-dom";
import Footer from "../page/Footer/Footer";
import Navbar from "../page/Home/Navbar/Navbar";

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="mx-10">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;