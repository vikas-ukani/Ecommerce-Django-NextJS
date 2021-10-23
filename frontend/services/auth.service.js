import axios from "axios"
import API_URL from 'services'


export const authLoginAPI = (params = {}) => {
    return {
        url: "jwt/create/",
        method: "post",
        //   headers: { accept: "*/*", Authorization: "Bearer " + getToken() },
        body: params,
    };
};

export const callLoginAPI = (data) => {
    return axios.post(API_URL + 'jwt/create/', data).then(async res => await res).catch(async res => await res.response)
}


export const callRegisterAPI = (data) => {
    return axios.post(API_URL + 'auth/users/', data).then(async res => await res).catch(async res => await res.response)
}