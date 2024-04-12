import axiosInstance from "./Axios";
import axios  from "axios";
export const getProducts = () => {
  return axiosInstance.get("/?format=json");
};

export const getAllProducts = () => {
  return axiosInstance.get("/products");
};

export const searchProducts = (searchTerm) => {
  return axiosInstance.get("/products/search/", {
    params: {
      search: searchTerm
    }
  });
};

export const ProductsByCategories = (CategoryId) => {
  return axiosInstance.get(`/products/category/${CategoryId}/`);
}
export const nextProducts = ( url )=>{
  return axios.get(url)
 }
