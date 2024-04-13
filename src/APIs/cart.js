import axiosInstance from "./Axios";

// Add
export const addProductToCart = (p_id) => {
  return axiosInstance.post(
    "/cart/add/",
    {
      product_id: p_id,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    }
  );
};


// Read
export const getCartData = () => {
  return axiosInstance.get("/cart/", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
};


// Delete
export const removeFromCartData = (p_id) => {
  return axiosInstance.delete(`/cart/remove/${p_id}/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
};


// Update
export const updateCartProductQuantity = (cart_item_id, quantity) => {
  return axiosInstance.put(
    `/cart/update/${cart_item_id}/`,
    {
      quantity: quantity,
    },
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    }
  );
};
