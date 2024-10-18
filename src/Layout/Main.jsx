import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Nav from "../Pages/Shared/Nav";

const Main = () => {
    const location = useLocation()
    const isLogin = location.pathname.includes('login') ||  location.pathname.includes('signUp')
    return (
        <div>
            {isLogin || <Nav></Nav>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    );
};

export default Main;