import { FaBook, FaCalendarAlt, FaListUl, FaShoppingCart, FaUsers } from "react-icons/fa";
import { IoIosHome } from "react-icons/io";
import { IoWalletSharp } from "react-icons/io5";
import { NavLink, Outlet } from "react-router-dom";
import icon from '../../src/assets/icon/icons8-review-32.png'
import { LuCalendarCheck2 } from "react-icons/lu";
import { MdOutlineMenu, MdOutlineMessage } from "react-icons/md";
import { GiShoppingBag } from "react-icons/gi";
import { ImSpoonKnife } from "react-icons/im";
import useAdmin from "../hooks/useAdmin";
const DashBoard = () => {
    const [isAdmin] = useAdmin()
    // console.log(isAdmin);
    // if (isLoading) return 'Loading...'
    return (
        <div className="flex">
            <div className="min-h-screen bg-[#D1A054] w-64">
                <p className="text-3xl font-semibold p-3 font-cinzel text-center">FarishTa <br /> <span className="text-2xl">R E S T A U R A N T</span></p>
                <ul className="menu p-4 text-xl">
                    {
                        isAdmin?  <>
                            <li>
                                <NavLink to='dashboard/ahome'><IoIosHome></IoIosHome>Admin Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='addItem'><ImSpoonKnife />Add Items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageItems'><FaListUl />Manage items</NavLink>
                            </li>
                            <li>
                                <NavLink to='/dashboard/manageBookings'><FaBook /> Manage Bookings</NavLink>
                            </li>

                            <li className="border-b-2 pb-3 border-white">
                                <NavLink to='/dashboard/users'><FaUsers />All users</NavLink>
                            </li>
                        </> :
                            <>
                                <li>
                                    <NavLink to='/dashboard/userHome'><IoIosHome></IoIosHome>User Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'><FaCalendarAlt></FaCalendarAlt>Reservation</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/paymentHistory'><IoWalletSharp /> Payment History</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/dashboard/cart'><FaShoppingCart></FaShoppingCart> My Cart</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/'>
                                        <div className="flex gap-1">
                                            <img className="w-6 h-6" src={icon} alt="" />
                                            <p>Add Review</p>
                                        </div>
                                    </NavLink>
                                </li>
                                <li className="border-b-2 pb-3 border-white">
                                    <NavLink to='/'> <LuCalendarCheck2 /> My Bookings</NavLink>
                                </li>
                            </>
                    }
                    {/* shared navlinks */}
                    <li >
                        <NavLink to='/'> <IoIosHome />Home</NavLink>
                    </li>
                    <li >
                        <NavLink to='/menu'> <MdOutlineMenu /> Menu</NavLink>
                    </li>

                    <li >
                        <NavLink to='/'> <GiShoppingBag />Shop</NavLink>
                    </li>

                    <li >
                        <NavLink to='/'> <MdOutlineMessage />Contract</NavLink>
                    </li>

                </ul>
            </div>
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;