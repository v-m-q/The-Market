import axiosInstance from "./Axios";

export const getProducts = () => {
  return axiosInstance.get("/?format=json");
};