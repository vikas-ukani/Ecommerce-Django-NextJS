import { findWhere, isEmpty, where } from 'underscore'

/**
 * Returning an Filtred products
 */
export const productFilter = (products, filters) => {
    if (isEmpty(filters)) return products
    if (isEmpty(products)) return []

    var filteredProduct = []
    if (products && filters.category) {
        filteredProduct = products.filter(product => {
            return product.category.slug == filters.category
        })
    }
    return filteredProduct
}


export const getFeaturedProducts = (products) => {
    if (isEmpty(products)) return products
    return where(products, { 'is_featured': true })

}
