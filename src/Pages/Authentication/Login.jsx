
import './style.css'
import img1 from '../../assets/others/authentication2.png'
import fb from '../../assets/icon/icons8-facebook-50.png'
import google from '../../assets/icon/icons8-google-48.png'
import git from '../../assets/icon/icons8-github-50.png'
import { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import toast from 'react-hot-toast'
const Login = () => {
    const { signIn } = useContext(AuthContext)
    const navigate=useNavigate()
    const location=useLocation()
    const formi=location.state?.form?.pathname || '/';
    const handleLogin = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIn(email, password)
            .then(result => {
                console.log(result)
                toast.success('User logged in')
                navigate(formi,{replace:true})
            })
            .catch(error => console.log(error))

    }

    return (
        <div id="login" className="min-h-screen  flex lg:flex-row flex-col">
            <div className='w-1/2 lg:pt-32'>
                <img src={img1} alt="" />
            </div>
            <div className='w-1/2'>
                <div className='mx-20'>
                    <h1 className='text-center text-3xl mt-16 font-bold relative top-9'>Login</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="email"
                                className="input input-bordered rounded-none"
                                required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered rounded-none mb-4"
                                required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary border-none bg-[#D1A054] rounded-none  text-white text-xl uppercase">Sign IN </button>
                        </div>
                        <p className='text-center text-lg text-[#D1A054]'>New here?<Link className='link-hover' to='/signUp'>Create a new account</Link></p>
                        <p className='text-lg text-black text-center font-semibold'>Or sign in with</p>
                        <div className='flex justify-center lg:relative bottom-2 mt-5'>
                            <div className='flex gap-10'>
                                <img className='h-8 w-8 border-2 border-black rounded-full p-1 cursor-pointer  ' src={fb} alt="" />
                                <img className='h-8 w-8 border-2 border-black rounded-full p-1' src={google} alt="" />
                                <img className='h-8 w-8 border-2 border-black rounded-full p-1' src={git} alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;