import axios from "axios";

export const axiosInstance = axios.create({
  // This reads the variable from your .env file
  baseURL: import.meta.env.VITE_API_BASE_URL,

  // This is important for sending cookies with your requests
  withCredentials: true,
});