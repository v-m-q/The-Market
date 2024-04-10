import axiosInstance from "./Axios";

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