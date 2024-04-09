import axiosInstance from "./Axios";

export const getProducts = () => {
  return axiosInstance.get("/?format=json");
};

export const getAllProducts = () => {
  return axiosInstance.get("/products");
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
