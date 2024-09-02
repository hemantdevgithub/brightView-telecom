import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ValidInput from '../components/Shared/Inputs/ValidInput';

import { useDispatch } from 'react-redux';
import { loginUser } from '../Api/authApi.js';
import { loginFailure, loginStart, loginSuccess } from "../redux/features/authSlice.js";


const Login = () => {
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: {
            email: "",
            password: ""
        }
    })
    const onSubmit = async (data) => {
        const { email, password } = data;
        try {
            dispatch(loginStart())
            const response = await loginUser({ email, password });
            if (response.success === true || response.statusCode === 200) {
                dispatch(loginSuccess(response.data.user));
                toast.success(response.message);
                navigate(location.state?.from?.pathname || "/", { replace: true })
            }
        } catch (error) {
            dispatch(loginFailure(error?.data));
            toast.error(error?.data?.message)
        }

        // try {
        //     const response = await axiosPrivate.post("/users/login",
        //         JSON.stringify({ email, password }),
        //     )

        //     console.log(response.data.data.user);
        //     if (response.data.success === true) {
        //         const userData = response.data.data.user;
        //         toast.success(response.data.message)
        //         navigate("/")
        //         reset()
        //     }
        // } catch (error) {
        //     console.log(error);
        //     if (error) {
        //         toast.error(error.response.data.message)
        //     }
        //     else{
        //         toast.error("Something went wrong try again later")
        //     }
        // }
    }
    return (
        <div
            className={`w-full bg-gray-100 flex font-syne`}
        >
            <div className='min-h-full text-white hidden lg:w-[40%] bg-softBlue lg:flex justify-center text-center items-center'>
                <div className='space-y-8 w-[80%] mx-auto'>
                    {/* <h1 className='text-4xl font-syne'>Welcome To HealthFROGS</h1> */}
                    <p className='text-2xl'>
                        Don't Have account Yet ?
                    </p>
                    <p>
                        Let's get you all set up so you can start creating your first onboarding experience
                    </p>
                    <button
                        className='border uppercase px-8 py-2 rounded-md hover:bg-primary duration-300'
                    >
                        <Link to={'/sign-up'}>
                            Sign Up Now
                        </Link>
                    </button>
                </div>
            </div>
            <div className='h-full lg:w-[60%] py-20 flex flex-col items-center justify-center space-y-5'>
                <div className='space-y-3 text-center'>
                    <h1 className='text-2xl text-softBlue font-extrabold'>Log in to your Account</h1>
                    <p className='lg:w-[60%] mx-auto text-center text-secondary'>
                        Login in to your account so you can continue building and editing your onboarding team
                    </p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='px-5 w-full lg:w-[60%] mx-auto space-y-5'>
                    <ValidInput
                        id={"email"}
                        type={"email"}
                        label={"Email"}
                        pText={"Your Email Address"}
                        register={register}
                        validation={{
                            required: "Email is required",
                        }}
                        errorName={errors.email}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <ValidInput
                        id={"password"}
                        type={"password"}
                        label={"Password"}
                        pText={"Your Password"}
                        register={register}
                        validation={{
                            required: "Password is required",
                            minLength: {
                                value: 8,
                                message: "Password must be at least 8 characters"
                            }
                        }}
                        errorName={errors.password}
                        disabled={isLoading}
                        errors={errors}
                    />
                    <div className='flex justify-between items-center'>
                        <div className='flex items-center gap-2'>
                            <input
                                type="checkbox" className='h-4 w-4 cursor-pointer rounded-full' />
                            <p className='text-secondary'>
                                Remember Me
                            </p>
                        </div>
                        <p className='text-softBlue text-sm hover:underline cursor-pointer'>Forgot Password ?</p>
                    </div>
                    <input
                        type="submit"
                        value="Log in"
                        className={`w-full cursor-pointer bg-softBlue py-2 text-white uppercase font-syne rounded-md`}
                    />
                </form>
                <div className=' lg:hidden text-sm '>
                    <p>Don't Have Account ?
                        <Link to={'/sign-up'}>
                            <span className='text-softBlue hover:underline'>Sign Up Now</span>
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

const InputField = ({ label, pText, name, type }) => {
    return (
        <div className='w-full space-y-1'>
            <p className='pl-1'>
                {label}
            </p>
            <input
                type={type}
                name={name}
                placeholder={pText}
                className='border bg-gray-white px-4 h-[50px] w-full outline-none focus:border-softBlue' />
        </div>
    )
}

export default Login;