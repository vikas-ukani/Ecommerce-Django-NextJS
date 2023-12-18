import { useEffect, useState } from 'react';
import Link from 'next/link'
import CartIcon from '../UI/CartIcon';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, removeToken } from 'Utils/token';
import { useRouter } from 'next/router';
import { saveToken } from 'store/modules/auth';
import MyAccountPopover from "Components/UI/MyAccountPopover";


const HeaderRight = () => {
    const router = useRouter()
    const { cartCounter } = useSelector((state) => state.products)
    const { accessToken } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    useEffect(() => {
        const token = getToken()
        if (token) dispatch(saveToken(token))
    }, [accessToken])

    const logoutProcess = () => {
        removeToken()
        router.push('/auth/login')
        dispatch(saveToken(null))
    }
    return (
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <CartIcon cartCounter={cartCounter} />
            {accessToken
                ? (
                    <>
                        <Link href='/user/profile' className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" >
                            My Profile
                        </Link >
                        <MyAccountPopover />
                        <button
                            className="text-black-600 mx-1 sm:mx-1 capitalize tracking-wide hover:text-orange-500 transition-all"
                            onClick={logoutProcess}
                        >
                            Logout
                        </button >
                    </>
                )
                : (
                    <>
                        <Link href='/auth/login' className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" >
                            Sign In
                        </Link >
                        <Link href={'/auth/register'} >
                            <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange border-blue-600 hover:bg-blue-200 hover:shadow-inner font-bold">
                                Sign Up
                            </button>
                        </Link>
                    </>
                )
            }
        </div >
    );
}

export default HeaderRight;