import SectionTitle from 'Components/UI/SectionTitle';
import Link from 'next/link'
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getFeaturedProducts } from 'Utils/productUtils';
import ProductList from './ProductList';

const FeatureProducts = () => {
    const products = useSelector(state => state.products.products)
    const [featured, setFeatured] = useState([])

    useEffect(() => {
        setFeatured(getFeaturedProducts(products).slice(0, 6))
    }, [products])

    return (
        <section className=" bg-gray-100 section py-14">
            <SectionTitle title="featured products" />
            <div className="section-center pt-10 sm:grid md:grid-cols-3 xl:grid-cols-3 grid">
                {products && <ProductList products={featured} />}
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