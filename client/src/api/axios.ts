import axios from "axios";

const BASE_URL = "http://localhost:5002/api/";

export const ENDPOINTS = {
  PRODUCTS: "products",
  SEARCHPRODUCT: "products/search",
  BROWSE: "products/browse",
  USERS: "users",
  ORDERS: "orders",
};

export const createAPIEndpoint = (endpoint: String) => {
  let url = BASE_URL + endpoint;

  return {
    fetchAllProducts: () => axios.get(url),

    fetchById: (id: String) => axios.get(`${url}/${id}`),

    fetchProductsByMainCategory: (
      mainCategory: String,
      currentPage: number,
      listLimit: number
    ) =>
      axios.get(
        `${url}/${mainCategory}/data?page=${currentPage}&limit=${listLimit}`
      ),

    fetchSubCategoryData: (subCategory: String) =>
      axios.get(`${url}/${subCategory}/subcategory`),

    fetchMainCategoryData: (searchTerm: String) =>
      axios.get(`${url}/category?searchTerm=${searchTerm}`),

    fetchBySearch: (
      searchTerm: String,
      currentPage: number,
      listLimit: number
    ) =>
      axios.get(
        `${url}?searchTerm=${searchTerm}&page=${currentPage}&limit=${listLimit}`
      ),

    userSignIn: (formData: { email: String; password: String }) => {
      const data = axios.post(`${url}/signin`, formData);
      return data;
    },

    userRegister: (formData: {
      firstName: String;
      lastName: String;
      email: String;
      password: String;
      address: String;
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
      axios.get(`${url}/history/${userId}`),

    fetchOrderById: (orderId: string) => axios.get(`${url}/${orderId}`),
  };
};
