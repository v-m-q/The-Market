import axiosInstance from "./Axios";

export const addProductToCart = (p_id) => {
  return axiosInstance.post("/cart/add/", 
      {
        "product_id": p_id
      },
      {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer Token'
          }
        }
      );
    };
    
    export const getCartData = () => {
      return axiosInstance.get("/cart/", 
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer Token'
        }
      }
  );
};