const AddToCartButton = ({ moveToCart }) => {
    return (
        <a className="shadow-lg hover:shadow-2xl text-black bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:ring-yellow-400 font-large rounded-lg font-black text-md px-4 py-3 cursor-pointer "
            onClick={moveToCart}
        >
            Add to cart
        </a>
    );
}

export default AddToCartButton;