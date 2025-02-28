import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://mychat-cuj6.onrender.com/api" : "/api",
  withCredentials: true,
});
