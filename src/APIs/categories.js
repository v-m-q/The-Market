import axiosInstance from "./Axios";

export const getAllCategories = () => {
    return axiosInstance.get("/categories");
  };
  