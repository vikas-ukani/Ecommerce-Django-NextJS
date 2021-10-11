import ProductGridItem from './ProductGridItem';

const ProductList = ({ products }) => {
    return (
        <>
            {products && products.map(product => (
                <ProductGridItem key={product.id} product={product} />
            ))}
        </>
    );
}

export default ProductList;