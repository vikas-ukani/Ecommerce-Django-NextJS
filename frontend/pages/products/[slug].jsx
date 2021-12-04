import ProductDetailPage from "Components/Products/ProductDetailPage";
import { useRouter } from "next/router";
import { useEffect, useState } from 'react'
import { getProductBySlug } from "services/product.service";


const ProductDetail = () => {
    const [product, setProduct] = useState({})
    const { query: { slug } } = useRouter()

    useEffect(() => {
        const getProduct = async (slug) => {
            let productResult = await getProductBySlug(slug)
            console.log('Here::', productResult);
            setProduct(productResult)
        }
        if (slug) getProduct(slug)
    }, [slug])

    return (
        <ProductDetailPage product={product} />
    );
}

export default ProductDetail;