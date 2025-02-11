import './style.css'
import img1 from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import useAxiosPublic from '../../hooks/useAxiosPublic'
import useAuth from '../../hooks/useAuth'
import Social from './Social';
const SignUp = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const { createUser, updateUserProfile} = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
  
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
                    .then(res => console.log(res.data))
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
 
    return (
        <div id="login" className="min-h-screen border-2 flex lg:flex-row-reverse flex-col">
            <div className='lg:block hidden w-1/2 lg:pt-32'>
                <img className='w-full' src={img1} alt="" />
            </div>
            <div className='lg:w-1/2'>
                <div className='lg:mx-20'>
                    <h1 className='text-center text-3xl font-bold lg:relative mt-8 top-9'>SignUp</h1>
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
                        <Social></Social>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;