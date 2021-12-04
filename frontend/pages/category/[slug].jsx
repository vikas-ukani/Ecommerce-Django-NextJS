import ProductList from "Components/Products/ProductList"
import { useEffect, useState } from "react"
import { getProductByCategorySlug } from "services/category.service"

export const getServerSideProps = async (props) => {
    let { slug } = props.query
    return {
        props: {
            slug
        }
    }
}


const Category = ({ slug }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const getProductByCateSlug = async (slug) => {
            const data = await getProductByCategorySlug(slug)
            console.log('data::', data);
            setProducts(data)
        }
        getProductByCateSlug(slug)
    }, [slug])

    return (
        <div className="m-5 pt-5">
            <div className='grid xs:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1'>
                <ProductList products={products} />
            </div>
        </div>
    );
}

export default Category;