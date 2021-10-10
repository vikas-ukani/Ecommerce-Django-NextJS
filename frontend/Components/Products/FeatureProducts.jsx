import SectionTitle from 'Components/UI/SectionTitle';
import Link from 'next/link'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "store/modules/product";

const FeatureProducts = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.products.products)
    useEffect(() => {
        dispatch(fetchProducts())
    }, [])


    return (
        <section className=" bg-gray-100 section py-14">
            <SectionTitle title="featured products" />
            <div className="section-center pt-10 sm:grid md:grid-cols-3 xl:grid-cols-3 grid">
                {/* {[1, 2, 3, 4, 5, 6].map((id) => { */}
                {products && products.map((product) => {
                    return (
                        <div key={product.id} className="px-5 py-5 ">
                            <div className="max-w-lg mx-auto">
                                <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-full mb-5">
                                    <a href="#">
                                        <img className="rounded-t-lg"
                                            src={product.image}
                                            style={{
                                                height: "350px",
                                                width: '100%'
                                            }}
                                            alt={product.name} />
                                    </a>
                                    <div className="p-5 bg-indigo-100">
                                        <a href="#">
                                            <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                                                {product.name}
                                            </h5>
                                        </a>
                                        <p className="font-normal text-gray-700 mb-3">
                                            Here are the biggest enterprise technology acquisitions of 2021 so far,
                                            {/* in reverse chronological order. */}
                                        </p>
                                        <p className='text-bold'>
                                            <span>&#8377;</span>
                                            {product?.price}
                                        </p>
                                        <div className="text-center space-x-10 inline-flex">
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
                    )
                })}
            </div>
            <div className="text-center center-block mb-16 text-5xl">
                {/* <b className='capitalize italic border-b-8 rounded-b-3xl border-t-8 rounded-t-3xl border-pink-900 px-6 py-5'> */}
                <Link href="/products">
                    <a className="shadow-lg hover:shadow-2xl text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-large rounded-lg font-black text-lg px-6 py-3 text-center inline-flex items-center">
                        View All Products
                    </a>
                </Link>
                {/* </b> */}
            </div>

        </section>
    );
}

export default FeatureProducts;