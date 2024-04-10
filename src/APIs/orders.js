import axiosInstance from './Axios'; 

export const getAllOrders = () => {
    const token = localStorage.getItem('token'); 
    return axiosInstance.get("/orders", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("Token")}`,
      },
    });
};

export const getAllOrdersItems = (orderId) => {
  const token = localStorage.getItem('token'); 
  return axiosInstance.get(`/orders/${orderId}/items/`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("Token")}`,
    },
  });
};
