import Cookies from "js-cookie";

export const userDetail = () => {
  if (Cookies.get("user")) {
    let user = JSON.parse(Cookies.get("user"));
    return user;
  } else {
    return null;
  }
};

export const setToken = (token = null) => {
  return Cookies.set("token", token) || null;
};

export const getTokenType = () => {
  return "Bearer " || null;
};

export const getToken = () => {
  return Cookies.get("token") || null;
};
export const removeToken = () => {
  return Cookies.remove("token") || null;
};
export const removeUser = () => {
  return Cookies.remove("user") || null;
};

export const getUserId = () => {
  return userDetail()?.id || null;
};

export const getCookie = (key = null) => {
  return Cookies.get(key) || null;
};
export const setCookie = (key = null, value = null) => {
  Cookies.set(key, value) || null;
};
export const removeCookie = (key = null) => {
  Cookies.remove(key) || null;
};
