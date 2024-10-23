import { useQuery } from '@tanstack/react-query';
import SectionTitle from '../../Components/Title/SectionTitle'
import useAxiousSecure from '../../hooks/useAxiousSecure';
import useAuth from '../../hooks/useAuth';
const PaymentHistory = () => {
    const { user } = useAuth()
    const axiosSecure = useAxiousSecure()
    const { data: paymnets = [] } = useQuery({
        queryKey: ['payment', user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure(`/payments/${user?.email}`)
            return data
        },

    })
    console.log(paymnets)
    return (
        <div className="bg-gray-200 min-h-screen">
            <SectionTitle subHeading={'---At a Glance!---'} hading={'PAYMENT HISTORY'}></SectionTitle>

            <div className="mx-10 ">
                <p className="uppercase text-2xl font-semibold font-cinzel">total items :{paymnets?.length}</p>
                <table className='min-w-full divide-y mt-4 rounded-lg  text-white divide-gray-200'>
                    <thead className='bg-[#D1A054] uppercase  '>
                        <tr>
                            <th>*</th>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>Email</span>
                                </div>
                            </th>
                            <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right '
                            >
                                <div className='flex items-center gap-x-3'>
                                    <span>Transection Id</span>
                                </div>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <span>status</span>
                            </th>

                            <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right '
                            >
                                <span>date</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200 '>
                        {
                            paymnets?.map((item, index) => <tr key={item._id}  >
                                <td className="text-gray-500 px-2">{index + 1}</td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {item.email}
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {item.transictionId}
                                </td>

                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {item.status}
                                </td>
                                <td className='px-4 py-4 text-sm text-gray-500  whitespace-nowrap'>
                                    {new Date(item.date).toDateString('en-US', { year: 'numeric'})}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;