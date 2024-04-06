import axiosInstance from "./Axios";

// Update
export const stripeCheckout = (cartTotalAmount) => {
  return axiosInstance.post(
    `/pay/product_page`,
    {
      total_price: cartTotalAmount
    },
    {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    }
  );
};
