import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";

export const ENDPOINTS = {
  Products: "products",
};

export const createAPIEndpoint = (endpoint: String) => {
  let url = BASE_URL + endpoint;

  return {
    fetchAllProducts: () => axios.get(url),
    fetchById: (id: String) => axios.get(`${url}/${id}`),
  };
};
