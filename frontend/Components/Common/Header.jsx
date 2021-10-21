import Link from 'next/link'
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import CartIcon from '../UI/CartIcon';
import NavTitle from '../UI/NavTitle';

const Header = () => {
    const categories = useSelector((state) => state.common.categories)
    const { cartCounter } = useSelector((state) => state.products)

    return (
        <header className="fixed top-0 w-full z-30 bg-white-500 transition-all pt-0  ">
            <nav className=" px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 bg-blue-50 shadow-xl rounded-b-3xl ">
                <NavTitle />
                <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                    {categories?.length > 0 && categories?.map(category => {
                        return (
                            <Link key={category?.id} href={`/category/${category?.name}`}>
                                <a className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500">
                                    {category?.name}
                                </a>
                            </Link>
                        )
                    })}

                </ul>
                <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
                    <CartIcon cartCounter={cartCounter}  />
                    <Link href='/auth/login' >
                        <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-orange-500 transition-all" >
                            Sign In
                        </a>
                    </Link>
                    <Link href={'/auth/register'} >
                        <button className="font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange border-blue-600 hover:bg-blue-200 hover:shadow-inner font-bold">
                            Sign Up
                        </button>
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;