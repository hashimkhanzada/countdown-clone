import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";

export const ENDPOINTS = {
  PRODUCTS: "products",
  SEARCHPRODUCT: "products/search",
  BROWSE: "products/browse",
  USERS: "users",
  ORDERS: "orders",
};

export const createAPIEndpoint = (endpoint: string) => {
  let url = BASE_URL + endpoint;

  return {
    fetchAllProducts: () => axios.get(url),

    fetchById: (id: string) => axios.get(`${url}/${id}`),

    fetchProductsByMainCategory: (
      mainCategory: string,
      currentPage: number,
      listLimit: number
    ) =>
      axios.get(
        `${url}/${mainCategory}/data?page=${currentPage}&limit=${listLimit}`
      ),

    fetchSubCategoryData: (subCategory: string) =>
      axios.get(`${url}/${subCategory}/subcategory`),

    fetchMainCategoryData: (searchTerm: string) =>
      axios.get(`${url}/category?searchTerm=${searchTerm}`),

    fetchBySearch: (
      searchTerm: string,
      currentPage: number,
      listLimit: number
    ) =>
      axios.get(
        `${url}?searchTerm=${searchTerm}&page=${currentPage}&limit=${listLimit}`
      ),

    userSignIn: (formData: { email: string; password: string }) => {
      const data = axios.post(`${url}/signin`, formData);
      return data;
    },

    userRegister: (formData: {
      firstName: string;
      lastName: string;
      email: string;
      password: string;
      address: string;
    }) => {
      const data = axios.post(`${url}/signup`, formData);
      return data;
    },

    createNewOrder: (orderData: any) => {
      const data = axios.post(`${url}`, orderData, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("profile") || "{}").token
          }`,
        },
      });
      return data;
    },

    fetchOrderHistory: (userId: string) =>
      axios.get(`${url}/history/${userId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("profile") || "{}").token
          }`,
        },
      }),

    fetchOrderById: (orderId: string) =>
      axios.get(`${url}/${orderId}`, {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("profile") || "{}").token
          }`,
        },
      }),
  };
};
