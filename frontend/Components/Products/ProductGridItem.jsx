import ProductCard from "./ProductCard";

const ProductGridItem = ({ product }) => {
    return (
        <div className="px-5 py-5 ">
            <ProductCard product={product} />
        </div>
    );
}

export default ProductGridItem;