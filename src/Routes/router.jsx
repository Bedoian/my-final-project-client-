import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import OurMenu from "../Pages/MyMenu/OurMenu";
import Order from "../Pages/Our Shop/Order";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import DashBoard from "../Layout/DashBoard";
import PCart from "../DashBoard/PCart";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <OurMenu></OurMenu>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>
      }
    ]
  },
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/dashboard/cart',
        element: <PCart></PCart>
      }
    ]
  }
]);

export default router;