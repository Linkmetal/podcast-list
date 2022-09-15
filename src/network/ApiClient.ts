import axios from "axios";

const axiosInstance = axios.create({
  timeout: 2000,
  headers: {},
});

axiosInstance.interceptors.response.use((res) => res.data);

export const ApiClient = axiosInstance;
