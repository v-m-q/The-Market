import axiosInstance from "./Axios";

export const addProductToCart = (p_id) => {
  return axiosInstance.post("/cart/add/", 
      {
        "product_id": p_id
      },
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Your-Token'
        }
      }
  );
};