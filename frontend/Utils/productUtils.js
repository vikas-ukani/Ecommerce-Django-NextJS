import { findWhere, isEmpty, where } from 'underscore'

/**
 * Returning an Filtred products
 */
export const productFilter = (products, filters) => {
    if (isEmpty(filters)) return products
    if (isEmpty(products)) return []

    var filterdProduct = []
    if (products && filters.category) {
        filterdProduct = products.filter(product => {
            return product.category.id == filters.category
        })
    }
    return filterdProduct
}


export const getFeaturedProducts = (products) => {
    if (isEmpty(products)) return products
    return where(products, { 'is_featured': true })

}
