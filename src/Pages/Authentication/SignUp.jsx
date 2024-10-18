import './style.css'
import img1 from '../../assets/others/authentication2.png'
import fb from '../../assets/icon/icons8-facebook-50.png'
import google from '../../assets/icon/icons8-google-48.png'
import git from '../../assets/icon/icons8-github-50.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import useAuth from '../../hooks/useAuth'
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile, googleSignIn } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const location = useLocation()
    const form = location.state?.form?.pathname || '/';
    const onSubmit = data => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
                // created user adding to mongo
                const newUser = {
                    email: data.email,
                    name: data.name,
                    password: data.password,
                    photo: data.photo
                }
                axiosPublic.post('/users', newUser)
                    .then(res=>console.log(res.data))
                    .catch(error => console.log(error))
                // update profile
                updateUserProfile(data.name, data.photo)
                    .then(() => console.log('user profile updated'))
                    .catch(error => console.log(error))
                reset()
                toast.success('User created successfully')
                navigate('/login')
            })
            .catch(error => console.log(error))
    }
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
        <div id="login" className="min-h-screen border-2 flex lg:flex-row-reverse flex-col">
            <div className='w-1/2 lg:pt-32'>
                <img className='w-full' src={img1} alt="" />
            </div>
            <div className='w-1/2'>
                <div className='mx-20'>
                    <h1 className='text-center text-3xl font-bold relative mt-8 top-9'>SignUp</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name='name'
                                type="text"
                                {...register("name", { required: true })}
                                placeholder="Name"
                                className="input input-bordered rounded-none" />
                            {errors.exampleRequired && <span className='text-red-500'>Name field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo</span>
                            </label>
                            <input
                                name='photo'
                                type="url"
                                {...register("photo", { required: true })}
                                placeholder="Photo"
                                className="input input-bordered rounded-none" />
                            {errors.exampleRequired && <span className='text-red-500'>Photo Url is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name='email'
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="email"
                                className="input input-bordered rounded-none" />
                            {errors.email && <span className='text-red-500'>Email field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name='password'
                                {...register("password", { required: true, minLength: 6, maxLength: 20 })}
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered rounded-none mb-4" />
                            {errors.password?.type === 'required' && <span className='text-red-500'>Password field is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 character</span>}
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary border-none bg-[#D1A054] rounded-none  text-white text-xl uppercase">Sign UP </button>
                        </div>
                        <p className='text-center text-lg text-[#D1A054]'>Already Registerd? <Link to='/login' className='link-hover'>Go to login</Link></p>
                        <p className='text-lg text-black text-center font-semibold'>Or sign in with</p>
                        <div className='flex justify-center lg:relative bottom-2 mt-5'>
                            <div className='flex gap-10'>
                                <img className='cursor-pointer h-8 w-8 border-2 border-black rounded-full p-1  ' src={fb} alt="" />
                                <img onClick={handleGoogle} className='h-8 w-8 border-2 cursor-pointer border-black rounded-full p-1' src={google} alt="" />
                                <img className='h-8 w-8 border-2 cursor-pointer border-black rounded-full p-1' src={git} alt="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;