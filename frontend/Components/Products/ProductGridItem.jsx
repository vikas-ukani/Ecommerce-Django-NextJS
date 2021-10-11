import Image from 'next/image'
const ProductGridItem = ({ product }) => {
    return (
        <div className="px-5 py-5 ">
            <div className="max-w-lg mx-auto">
                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-full mb-5">
                    <a href="#">
                        <Image
                            width="100%" height="100%" layout="responsive"
                            src={product.image}
                            alt={product.name}
                        />
                    </a>
                    <div className="p-5 bg-indigo-100">
                        <a href="#">
                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                {product.name}
                            </h5>
                        </a>
                        <p className="font-sm text-gray-700 mb-3">
                            {product?.short_description}
                            {/* in reverse chronological order. */}
                        </p>
                        <p className='text-bold text-yellow-700 font-extrabold text-xl pb-1'>
                            <span>&#8377;</span>
                            {product?.price}
                        </p>
                        <div className="text-center space-x-10 inline-flex flex-shrink">
                            <a className="shadow-lg hover:shadow-2xl text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-large rounded-lg font-black text-lg px-6 py-3 text-center inline-flex items-center" href="#">
                                Add to cart
                            </a>
                            <a className="shadow-lg hover:shadow-2xl text-white bg-blue-500 hover:bg-blue-400 focus:ring-4 focus:ring-blue-400 font-large rounded-lg font-black text-lg px-6 py-3 text-center inline-flex items-center" href="#">
                                Buy now
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductGridItem;