import axiosInstance from "./Axios";

// Update | cartTotalAmount
export const stripeCheckout = () => {
  return axiosInstance.post(
    `/pay/product_page`,
    {
      headers: {
        // "Content-Type": "application/json",
        // Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    }
  );
};
