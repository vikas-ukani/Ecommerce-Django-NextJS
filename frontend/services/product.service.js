import axios from 'axios'
import API_URL from 'services'


export const getAllProducts = () => {
    return axios.get(API_URL + 'products/').then(async (product) => await product.data)
}