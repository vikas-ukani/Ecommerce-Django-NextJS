import axios from "axios"
import API_URL from 'services'

export const callLoginAPI = (data) => {
    return axios.post(API_URL + 'jwt/create/', data).then(async res => await res).catch(async res => await res.response)
}

// export const getAllCategories = () => {
//     return axios.get(API_URL + 'category/').then(async data => await data.data)
// }