import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { productFilter } from "Utils/productUtils";
import ProductList from "../ProductList";


const FilteredProducts = () => {
    const { filters, products } = useSelector(state => state.products)
    const [filteredProduct, setFilteredProduct] = useState([])

    useEffect(() => {
        setFilteredProduct(productFilter(products, filters))
    }, [products, filters])
    return (
        <div className='grid xs:grid-cols-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-1'>
            <ProductList products={filteredProduct} />
        </div>
    );
}


export default FilteredProducts;