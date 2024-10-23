import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";
import fb from '../../assets/icon/icons8-facebook-50.png'
import google from '../../assets/icon/icons8-google-48.png'
import git from '../../assets/icon/icons8-github-50.png'
const Social = () => {
    const { googleSignIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.form?.pathname || '/';
    const axiosPublic = useAxiosPublic()
    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                console.log('google result', result.user)
                const newUser = {
                    email: result.user.email,
                    name: result.user.displayName,
                    password: 'google password',
                    photo: result.user.photoURL
                }
                axiosPublic.post('/users', newUser)
                    .then(res => console.log('from here', res.data))
                    .catch(error => console.log(error))
                toast.success('User logged in')
                navigate(form, { replace: true })

            })

            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <p className='text-lg text-black text-center font-semibold'>Or sign in with</p>
            <div className='flex justify-center lg:relative bottom-2 mt-5'>
                <div className='flex gap-10'>
                    <img className='cursor-pointer h-8 w-8 border-2 hover:border-[#D1A054] border-black rounded-full p-1  ' src={fb} alt="" />
                    <img onClick={handleGoogle} className='h-8 w-8 hover:border-[#D1A054] border-2 cursor-pointer border-black rounded-full p-1' src={google} alt="" />
                    <img className='h-8 w-8 border-2 cursor-pointer hover:border-[#D1A054] border-black rounded-full p-1' src={git} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Social;