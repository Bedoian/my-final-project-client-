import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Components/Title/SectionTitle";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import toast from "react-hot-toast";

const Users = () => {
    const axiosSecure = useAxiousSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })
    const handleDelete = (id, name) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: `${name} has been deleted.`,
                                icon: "success"

                            });
                        }
                    })
            }
        });
    }
    const handleUpdate = (user) => {
        axiosSecure.patch(`/users/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} is now admin`)
                }
            }

            )
    }
    return (
        <div className="bg-gray-200 min-h-screen">
            <SectionTitle hading={'MANAGE ALL USERS'} subHeading={'---How many??---'}></SectionTitle>
            <div className="bg-white mx-16 p-4 mb-3 rounded-md">
                <div className="">
                    <p className="uppercase text-2xl font-semibold font-cinzel">total users :{users.length}</p>

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
                                    <span>Name</span>
                                </div>
                            </th>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>email</span>
                                </div>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <span>role</span>
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
                            users.map((user, index) => <tr key={user._id} >
                                <td className="text-gray-500">{index + 1}</td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {user.name}
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {user.email}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {
                                        user.role === 'admin' ? 'Admin' : <button onClick={() => handleUpdate(user)} className=' btn lg:relative bottom-1 hover:bg-white hover:text-[#D1A054] hover:border hover:border-[#D1A054] text-white w-14 h-14 bg-[#D1A054]  text-center text-3xl  rounded-md mt-3 mr-5  whitespace-nowrap'>
                                            <FaUsers />
                                        </button>
                                    }

                                </td>

                                <div className="mt-3">
                                    <button onClick={() => handleDelete(user._id, user.name)} className=' btn text-white  text-center text-3xl w-14 h-14 hover:border hover:border-red-500 hover:text-red-500 hover:bg-white rounded-md mt-3 mr-5 bg-red-500   whitespace-nowrap'>
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

export default Users;