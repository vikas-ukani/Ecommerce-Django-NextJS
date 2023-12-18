import Link from 'next/link'
import { useSelector } from 'react-redux';
import NavTitle from '../UI/NavTitle';
import HeaderRight from './HeaderRight';

const Header = () => {
    const categories = useSelector((state) => state.common.categories)

    return (
        <header className="fixed top-0 w-full z-30 bg-white-500 transition-all pt-0  ">
            <nav className=" px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4 bg-blue-50 shadow-xl rounded-b-3xl ">
                <NavTitle />
                <ul className="hidden lg:flex col-start-4 col-end-8 text-black-500  items-center">
                    {categories?.length > 0 && categories?.map(category => {
                        return (
                            <Link key={category?.id} href={`/category/${category?.name}`} className="px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative text-black-500 hover:text-orange-500">
                                {category?.name}
                            </Link>
                        )
                    })}
                </ul>
                <HeaderRight />
            </nav>
        </header>
    );
}

export default Header;