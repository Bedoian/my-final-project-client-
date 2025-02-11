import { useQuery } from "@tanstack/react-query";
import useAxiousSecure from "./useAxiousSecure";
import useAuth from "./useAuth";

const useCart = () => {
    const axiosSecure = useAxiousSecure()
    const{user}=useAuth()
    const { data: cart = [],refetch } = useQuery({
        queryKey: ['cart',user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts/${user?.email}`)
            return res.data
        }
    })
    return [cart,refetch]
};

export default useCart;