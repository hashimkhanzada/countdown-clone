import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const ENDPOINTS = {
  PRODUCTS: "products",
  BROWSE: "products/browse",
};

export const createAPIEndpoint = (endpoint: String) => {
  let url = BASE_URL + endpoint;

  return {
    fetchAllProducts: () => axios.get(url),
    fetchById: (id: String) => axios.get(`${url}/${id}`),
    fetchByMainCategory: (mainCategory: String) =>
      axios.get(`${url}/${mainCategory}`),
  };
};
