import Link from 'next/link'

const CartIcon = ({ cartCounter }) => {
    return (
        <Link href={`/carts`}>
            <a href="">
                <span className="relative inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {cartCounter}
                    </span>
                </span>
            </a>
        </Link>
    );
}

export default CartIcon;