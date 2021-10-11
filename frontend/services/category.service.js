import axios from "axios"
import API_URL from 'services'

export const getCategories = () => {
    return axios.get(API_URL + 'category/').then(async data => await data.data)
}

// export const getAllCategories = () => {
//     return axios.get(API_URL + 'category/').then(async data => await data.data)
// }