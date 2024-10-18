import { useContext, useState } from "react";
import icon from '../../assets/others/icons8-cart-48.png'
import { NavLink } from "react-router-dom"
import { AuthContext } from "../../Provider/AuthProvider";
import useCart from "../../hooks/useCart";
const Nav = () => {
    const { user, logOut } = useContext(AuthContext)
    const [isOpen, setIsOpen] = useState(false)
    const [cart] = useCart()
    const hanldeLogOut = () => {
        logOut()
            .then(res => console.log(res))
    }
    return (
        <div className="">
            <nav className="w-[1280px] z-10 bg-opacity-30  text-white bg-black h-[90px] items-center fixed">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <div>
                            <p><span className="text-xl">BISTRO BOSS</span>
                                <br />  R e s t a u r a n t</p>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex lg:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {!isOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        className={`${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'} absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center`}
                    >
                        <div className="flex text-xl flex-col md:flex-row md:mx-6">
                            <NavLink to={'/'}
                                className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                HOME
                            </NavLink>
                            <NavLink to={'/contract'}
                                className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                CONTRACT US
                            </NavLink>
                            <NavLink to={'/dashboard'}
                                className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                DASHBOARD
                            </NavLink>
                            <NavLink to={'/menu'}
                                className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                OUR MENU
                            </NavLink>
                            <NavLink to={'/order/salad'}
                                className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                            >
                                OUR SHOP
                            </NavLink>
                            <div >
                                <NavLink to='/dashboard  '>
                                    <div className="flex">
                                        <img className="w-10 h-10 relative  bottom-1" src={icon} alt="" />
                                        <span className="badge relative right-1 badge-secondary">
                                            +{cart.length}
                                        </span>
                                    </div>
                                </NavLink>
                            </div>
                            {
                                user ? < button className="lg:relative bottom-1 left-2" onClick={hanldeLogOut} to={'/login'}>
                                    SIGN OUT
                                </button> : <NavLink to={'/login'}
                                    className={({ isActive }) => ` ${isActive ? 'text-yellow-400' : ''} my-2  transition-colors duration-300 transform  hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0`}
                                >
                                    SIGN IN
                                </NavLink>
                            }
                        </div>
                        <div className="flex justify-center md:block">
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;