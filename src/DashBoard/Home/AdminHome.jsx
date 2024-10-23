import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from '../../hooks/useAxiousSecure'
import { IoWalletSharp } from "react-icons/io5";
import { FaTruckMoving, FaUsers } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
const AdminHome = () => {
    const axiosSecure = useAxiosSecure()
    const { data } = useQuery({
        queryKey: ['admin-stats'],
        queryFn: async () => {
            const { data } = await axiosSecure('/admin-stats')
            return data
        }
    })
    console.log(data);
    return (
        <div className="">
            <h1 className="text-3xl font-semibold uppercase font-cinzel mx-4 mt-10 ">Hi, Welcome back our admin</h1>
            <div className="flex justify-evenly mt-6">
                <div className="flex gap-4 text-3xl text-white p-5 rounded-md font-bold bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF]">
                    <div className="relative top-6 text-4xl">
                        <IoWalletSharp />
                    </div>
                    <div>
                        <p> {data?.revenue}</p>
                        <p>Revenue</p>
                    </div>
                </div>
                <div className="flex gap-4 text-3xl text-white p-5 rounded-md font-bold bg-gradient-to-r from-[#D3A256] to-[#FDE8C0]">
                    <div className="relative top-6 text-4xl">
                        <FaUsers></FaUsers>
                    </div>
                    <div>
                        <p> {data?.users}00</p>
                        <p>Customers</p>
                    </div>
                </div>
                <div className="flex gap-4 text-3xl text-white p-5 rounded-md font-bold bg-gradient-to-r from-[#FE4880] to-[#FECDE9]">
                    <div className="relative top-6 text-4xl">
                        <SiCodechef />
                    </div>
                    <div>
                        <p> {data?.menuIntems}</p>
                        <p>Menu Items</p>
                    </div>
                </div>
                <div className="flex gap-4 text-3xl text-white py-5 px-10  rounded-md font-bold bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF]">
                    <div className="relative top-6 text-4xl">
                        <FaTruckMoving />
                    </div>
                    <div>
                        <p> {data?.orders}00</p>
                        <p>Orders</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;