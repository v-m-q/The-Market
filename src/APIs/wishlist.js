import axiosInstance from "./Axios";

export const getProductsByWishlist = () => {
  return axiosInstance.get("/wishlist");
};

export const addProductsToWishlist = () => {
  return axiosInstance.post();
};

export const removeProductsToWishlist = () => {
  return axiosInstance.delete();
};
