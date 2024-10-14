import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import OurMenu from "../Pages/MyMenu/OurMenu";
import Order from "../Pages/Our Shop/Order";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'/menu',
          element:<OurMenu></OurMenu>
        },
        {
          path:'/order',
          element:<Order></Order>
        }
      ]
    },
  ]);

export default router;