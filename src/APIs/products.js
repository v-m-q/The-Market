import axiosInstance from "./Axios";
import axios  from "axios";
export const getProducts = () => {
  return axiosInstance.get("/?format=json");
};

export const getAllProducts = () => {
  return axiosInstance.get("/products/");
};

export const getProductDetails = (id) => {
  return axiosInstance.get(`/products/${id}/`);
};

export const searchForProducts = (categoryId) => {
  return axiosInstance.get("/products/search/", {
    params: {
      search: categoryId,
    },
  });
};

export const rateProducts = (productId, rating) => {
  return axiosInstance.post(
    `/product/${productId}/add-rating/`,
    {
      value: rating,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    }
  );
};

export const ProductsByCategories = (CategoryId) => {
  return axiosInstance.get(`/products/category/${CategoryId}/`);
};

export const searchProducts = (searchTerm) => {
  return axiosInstance.get("/products/search/", {
    params: {
      search: searchTerm
    }
  });
};

export const nextProducts = ( url )=>{
  return axios.get(url)
 }