import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAxiousSecure from "../../hooks/useAxiousSecure";
import useCart from "../../hooks/useCart";

const FoodCart = ({ item }) => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const { name, image, recipe } = item
    const axiosSecure=useAxiousSecure()
    const location = useLocation()
    const[,refetch]=useCart()
    const handleCart = (item) => {
        const { name, image, _id,price } = item
        if (user && user.email) {
            const newItem = {
                menuId: _id,
                name,
                price,
                image,
                email: user.email
            }
            axiosSecure.post('/carts', newItem)
                .then(res => {
                    console.log(res.data)
                    if(res.data.insertedId){
                        toast.success(`${name} added to the cart`)
                        // refetch
                        refetch()
                    }
                })

        }
        else {
            Swal.fire({
                title: "Your are not logged in!",
                text: "Do you wanna login?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            })
                .then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login', { state: { form: location } })
                    }
                });
        }
    }
    return (
        <div>
            <div className=" w-[370px] shadow-xl">

                <div className="flex justify-center p-0">
                    <img src={image} alt="Shoes" />
                </div>

                <div className=" bg-base-100 text-center py-4 ">
                    <p className="text-xl font-semibold">{name}</p>
                    <p className="my-3">{recipe}</p>
                    <Link>
                        <button onClick={() => handleCart(item)} className="bg-gray-200 text-yellow-600 border-b-4 border-b-yellow-600 uppercase btn btn-ghost">add to cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;