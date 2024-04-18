import axios from "axios";

const axiosInstance = axios.create({
  baseURL: 'https://cartify-2.onrender.com',
});

export default axiosInstance;
