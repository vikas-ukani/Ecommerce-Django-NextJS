import FilteredProducts from "Components/Products/Filters/FilteredProducts";
import ProductFilters from "Components/Products/Filters/ProductFilters";
import { useSelector } from "react-redux";

const Products = () => {
    return (
        <div className="m-5 pt-5">
            <div className="grid grid-cols-4 gap-4">
                <ProductFilters />
                <div className="bg-red-200 col-span-3 rounded-xl">
                    <FilteredProducts  />
                </div>
            </div>
        </div>
    );
}

export default Products;