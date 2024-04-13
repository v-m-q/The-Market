import axiosInstance from "./Axios";

export const getProductsByWishlist = () => {
  return axiosInstance.get("/wishlist");
};

export const addProductsToWishlist = (p_id) => {
  return axiosInstance.post("/wishlist/add-to-wishlist/",
  {
    product: p_id,
  },
  {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
};

export const removeProductsToWishlist = () => {
  return axiosInstance.delete();
};
