import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import useAxiousSecure from "./useAxiousSecure";

const useMenu = () => {
    const axiosSecure = useAxiousSecure()
    const { data: menu ,isPending,refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await axiosSecure.get('/menu')
            return res.data
        }
    })
    return [menu,isPending,refetch]
};

export default useMenu;