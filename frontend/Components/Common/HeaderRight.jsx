import { useSelector } from 'react-redux';
import CartIcon from '../UI/CartIcon';
import Link from 'next/link'



const HeaderRight = () => {
    const { cartCounter } = useSelector((state) => state.products)
    const { accessToken } = useSelector((state) => state.auth)
    return (
        <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
            <CartIcon cartCounter={cartCounter} />
            {accessToken
                ? (<Link href='/user/profile' >
                    <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" >
                        My Profile
                    </a>
                </Link >
                )
                : (
                    <>
                        <Link href='/auth/login' >
                            <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" >
                                Sign In
                            </a>
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