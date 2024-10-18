import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({children}) => {
    const location=useLocation()
    const{user,loading}=useContext(AuthContext)
    if(loading)return 'Loading...'
    if(!user) return <Navigate to='/login' state={{form:location}} replace></Navigate>
    return children
};

export default PrivetRoute;