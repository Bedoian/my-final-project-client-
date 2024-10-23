import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home"
import OurMenu from "../Pages/MyMenu/OurMenu";
import Order from "../Pages/Our Shop/Order";
import Login from "../Pages/Authentication/Login";
import SignUp from "../Pages/Authentication/SignUp";
import DashBoard from "../Layout/DashBoard";
import PCart from "../DashBoard/Cart/PCart";
import Users from "../DashBoard/Users/Users";
import AddItems from "../DashBoard/Add Items/AddItems";
import AdminRoute from "../DashBoard/AdminRoute/AdminRoute";
import ManageBooking from "../DashBoard/Manage Bookings/ManageBooking";
import ManageItems from "../DashBoard/Manage Items/ManageItems";
import UpdateItem from "../DashBoard/Update/UpdateItem";
import Payment from "../DashBoard/Payment Getway/Payment";
import PaymentHistory from "../DashBoard/Payment History/PaymentHistory";
import AdminHome from "../DashBoard/Home/AdminHome";
import UserHome from "../DashBoard/Home/UserHome";


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
  // dashboard releted routes
  {
    path: '/dashboard',
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: '/dashboard/userHome',
        element: <UserHome></UserHome>
      },
      {
        path: '/dashboard/cart',
        element: <PCart></PCart>
      },
      {
        path: '/dashboard/payment',
        element: <Payment></Payment>
      },
      {
        path: '/dashboard/paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // admin concerns
      {
        path: '/dashboard/adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: '/dashboard/users',
        element: <AdminRoute><Users></Users></AdminRoute>
      },
      {
        path: '/dashboard/addItem',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: '/dashboard/manageBookings',
        element: <ManageBooking></ManageBooking>
      },
      {
        path: '/dashboard/manageItems',
        element: <ManageItems></ManageItems>
      },
      {
        path: '/dashboard/updateItem/:id',
        element: <UpdateItem></UpdateItem>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
    ]
  }
]);

export default router;