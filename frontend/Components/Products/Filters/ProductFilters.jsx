import { useDispatch, useSelector } from "react-redux";
import { applyFilter } from "store/modules/product";

const ProductFilters = () => {
    const { categories } = useSelector(state => state.common)
    const { filters } = useSelector(state => state.products)

    const dispatch = useDispatch();
    const updateCategory = (name, value) => {
        dispatch(applyFilter({ name, value }))
    }

    const CategoryButton = ({ category }) => {
        return (
            <button name='category' type="button"
                onClick={() => updateCategory('category', category.slug)}
                // onClick={() => category.parent && updateCategory('category', category.slug)}
                className={`${filters.category == category.slug && 'border-b font-bold border-black'}`}>
                {filters && filters.category === category.slug}
                {category.name}
            </button>
        )
    }

    return (
        <div className="">
            <div className="bg-white shadow-lg  p-2 rounded-2xl text-2xl font-bold text-center capitalize" >
                Product Filters
            </div>
            <div className="bg-white shadow-lg  mt-2 p-3 rounded-2xl text-left capitalize font-extrabold" >
                <b className='py-5'>Available Categories</b>
                <ul className='pt-3'>
                    {categories && categories.map(category => (
                        <li key={category.id} className='py-1'>
                            <CategoryButton category={category} />
                            {category.children && (
                                <ol className="pl-5 py-1">
                                    {category.children.map(subcategory => (
                                        <li key={subcategory.id}>
                                            <CategoryButton category={subcategory} />
                                            {subcategory.children && (
                                                <ol className="pl-5 py-1">
                                                    {subcategory.children.map(subSubcategory => (
                                                        <li key={subSubcategory.id}>
                                                            <CategoryButton category={subSubcategory} />
                                                            {subSubcategory.children && (
                                                                <ol className="pl-5 py-1">
                                                                    {subSubcategory.children.map(subSubSubcategory => (
                                                                        <li key={subSubSubcategory.id}>
                                                                            <CategoryButton category={subSubSubcategory} />
                                                                        </li>
                                                                    ))}
                                                                </ol>
                                                            )}
                                                        </li>
                                                    ))}
                                                </ol>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProductFilters;