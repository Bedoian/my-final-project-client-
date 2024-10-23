import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../Components/Title/SectionTitle";
import { FaEdit } from "react-icons/fa";
import useMenu from "../../hooks/useMenu";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousSecure from "../../hooks/useAxiousSecure";

const ManageItems = () => {
    const [menu, isPending, refetch] = useMenu()
    const axiosSecure = useAxiousSecure()
    if (isPending) return 'pending babu.....'
    const handleDelete = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`)
                if (res.data.deletedCount) {
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted`,
                        icon: "success"
                    });
                }

            }
        });
    }

    return (
        <div className="bg-gray-200 min-h-screen">
            <SectionTitle subHeading={'---Hurry Up!---'} hading={'MANAGE ALL ITEMS'}></SectionTitle>
            <div className="mx-10">
                <p className="uppercase text-2xl font-semibold font-cinzel">total items :{menu?.length}</p>
                <table className='min-w-full divide-y mt-4   text-white divide-gray-200'>
                    <thead className='bg-[#D1A054] uppercase  '>
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
                                <span>delete</span>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <button className='flex uppercase items-center gap-x-2'>
                                    <span>edit</span>
                                </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 '>
                        {
                            menu?.map((item, index) => <tr key={item._id}  >
                                <td className="text-gray-500 px-2">{index + 1}</td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    <img src={item.image} className="w-28" alt="" />
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {item.name}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    ${item.price}
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    <Link to={`/dashboard/updateItem/${item._id}`}>
                                        <button className=' btn lg:relative bottom-2 hover:bg-white hover:text-[#D1A054] hover:border hover:border-[#D1A054] text-white w-14 h-14 bg-[#D1A054]  text-center text-3xl  rounded-md mt-3 mr-5  whitespace-nowrap'>
                                            <FaEdit />
                                        </button>
                                    </Link>
                                </td>
                                <div className="mt-3">
                                    <button onClick={() => handleDelete(item)} className=' btn text-white  text-center text-3xl w-14 h-14 hover:border hover:border-red-500 hover:text-red-500 hover:bg-white rounded-md mt-3 mr-5 bg-red-500   whitespace-nowrap'>
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

export default ManageItems;