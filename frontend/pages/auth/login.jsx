import Link from "next/link"
import { useRouter } from 'next/router';
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from 'react-toast-notifications';
import { callLoginAPI } from 'services/auth.service';
import { saveToken } from 'store/modules/auth';
import { removeToken, setToken } from 'Utils/token';


const Login = () => {
    const router = useRouter()
    const { addToast } = useToasts()
    const dispatch = useDispatch()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (input) => {
        const { status, data } = await callLoginAPI(input);
        if (status === 401 || status === 400) {
            removeToken(null)
            addToast(data.detail, { appearance: 'error', autoDismiss: true })
        } else {
            setToken(data.access)
            dispatch(saveToken(data.access))
            addToast("Login Success!", { appearance: 'success', autoDismiss: true })
            router.push('/')
        }
    };

    return (
        <div className="min-h-screen py-2 flex flex-col justify-center sm:py-10">
            <div className="relative py-3 sm:max-w-xl w-2/6 md:mx-auto sm:mx-auto">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
                </div>
                <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-10 justify-center">
                    <div className="max-w-md mx-auto">
                        <div>
                            <h1 className="text-2xl font-semibold">Welcome Back !</h1>
                            <span className="text-1xl">Login here to explore more!</span>
                        </div>
                        <div className="divide-y divide-gray-200">
                            {/* {error && (<span className='text-red-500'>
                                {error}
                            </span>)} */}
                            <form onSubmit={handleSubmit(onSubmit)} autoComplete="off" noValidate
                                className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">

                                <div className="relative pb-3">
                                    <label htmlFor="username" className="pb-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm capitalize"
                                    >
                                        username</label>
                                    <input type="text"
                                        className="mt-3 peer placeholder-transparent h-12 p-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Enter username"
                                        {...register("username", { required: "The username is required", })}
                                    />
                                    {errors.username && <small className="text-red-500">{errors.username.message}</small>}
                                </div>
                                <div className="relative">
                                    <label htmlFor="password" className="pb-1 absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Password</label>
                                    <input autoComplete="none" type="password"
                                        className="mt-3 peer placeholder-transparenth-12 p-3 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                                        placeholder="Password"
                                        {...register("password", { required: "The password is required", })}
                                    />
                                    {errors.password && <small className="text-red-500">{errors.password.message}</small>}
                                </div>
                                <div className="relative ">
                                    <button type="submit"
                                        className="mt-3 shadow-lg hover:shadow-2xl text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 font-large rounded-lg font-black text-lg px-6 py-2 text-center inline-flex items-center "
                                    >
                                        Login
                                    </button>

                                    <Link href='/auth/register'
                                    >
                                        <a className="text-sm float-right mt-5 underline font-bold   ">
                                            Are you aready registred user?
                                        </a >
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;