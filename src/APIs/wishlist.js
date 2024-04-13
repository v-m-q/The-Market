import axiosInstance from "./Axios";

export const getProductsByWishlist = () => {
  return axiosInstance.get("/wishlist", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
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

export const removeProductsFromWishlist = (productId) => {
  return axiosInstance.delete("/wishlist/remove-from-wishlist/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
    data: {
      product: productId,
    },
  });
};

export const getWishlistProductsForPage = (url) => {
  return axiosInstance.get(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
};
