import toast from "react-hot-toast";
import SectionTitle from "../../Components/Title/SectionTitle";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import useCart from "../../hooks/useCart";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const PCart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiousSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const handleDelete = async (id, name) => {
        const { data } = await axiosSecure.delete(`/carts/${id}`)
        if (data.deletedCount) {
            refetch()
            toast.success(`${name} deleted successfully`)
        }
        console.log(data)
    }
    return (
        <div className="bg-gray-200 min-h-screen">
            <SectionTitle subHeading={'---At a Glance!---'} hading={'PAYMENT HISTORY'}></SectionTitle>
            <div className="bg-white mx-16 p-4 mb-3 rounded-md">
                <div className="flex justify-evenly">
                    <p className="uppercase text-3xl font-semibold font-cinzel">total orders : {cart.length}</p>
                    <p className="uppercase text-3xl font-semibold font-cinzel">total price:{totalPrice}</p>
                    {
                        cart.length ? <Link to='/dashboard/payment'>
                            <button className="text-xl btn font-cinzel bg-[#D1A054] text-white">Pay</button>
                        </Link> : <button disabled className="text-xl btn font-cinzel bg-[#D1A054] text-white">Pay</button>
                    }
                </div>
                {/* table */}
                <table className='min-w-full divide-y mt-4   text-white divide-gray-200'>
                    <thead className='bg-[#D1A054] uppercase rounded-t-xl'>
                        <tr>
                            <th>*</th>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>item image</span>
                                </div>
                            </th>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>item name</span>
                                </div>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <span>price</span>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <button className='flex uppercase items-center gap-x-2'>
                                    <span>action</span>
                                </button>
                            </th>


                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 '>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td className="text-gray-500">{index + 1}</td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    <img className="w-20" src={item.image} alt="" />
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {item.name}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    ${item.price}
                                </td>

                                <div className="mt-3">
                                    <button onClick={() => handleDelete(item._id, item.name)} className=' btn text-white  text-center text-3xl w-12 rounded-md mt-3 mr-5 bg-red-500 hover:bg-red-600  whitespace-nowrap'>
                                        <RiDeleteBin6Line />
                                    </button>
                                </div>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PCart;