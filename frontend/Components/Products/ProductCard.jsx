import AddToCartButton from 'Components/UI/AddToCartButton';
import BuyNow from 'Components/UI/BuyNow';
import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux';
import { addToCart } from "store/modules/product";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch()
    const moveToCart = () => dispatch(addToCart(1))
    const { slug } = product
    const PRODUCT_URL = 'products/' + slug
    console.log('product::', product);
    return (
        <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-full mb-5">
                <Link href={PRODUCT_URL}>
                        {product.product_images ? <Image
                            width="100%" height="100%" layout="responsive"
                            src={product.product_images[0].image}
                            alt={product.name}
                        />
                            :
                            product.name
                        }
                </Link>
                <div className="p-5 bg-indigo-100">
                    <Link href={PRODUCT_URL}>
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                {product.name}
                            </h5>
                    </Link>
                    <p className="font-sm text-gray-700 mb-3">
                        {product?.short_description}
                    </p>
                    <p className='text-bold text-yellow-700 font-extrabold text-xl pb-1'>
                        <span>&#8377; </span>
                        {product?.price}
                        <span className="text-xs text-green-600"> / OFF 0% </span>
                    </p>
                    <div className="px-5 py-2 flex flex-shrink grid-column justify-evenly gap-2 items-center">
                        <AddToCartButton moveToCart={moveToCart} />
                        <BuyNow />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;