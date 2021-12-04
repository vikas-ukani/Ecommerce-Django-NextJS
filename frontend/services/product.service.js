import axios from 'axios'
import API_URL from 'services'


export const getAllProducts = () => {
    return axios.get(API_URL + 'products/').then(async (product) => await product.data)
}

export const getProductBySlug = (slug) => {
    return axios.get(API_URL + 'products/' + slug).then(async (product) => await product.data)
}