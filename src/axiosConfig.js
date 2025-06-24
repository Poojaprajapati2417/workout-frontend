// axiosConfig.js
import axios from "axios";

// Axios instance
const instance = axios.create({
  baseURL: "/", // ✅ backend ka base URL
});

// Request Interceptor
instance.interceptors.request.use((config) => {
   const userString = localStorage.getItem("user");

  if (userString) {
    const user = JSON.parse(userString); // ✅ now it's an object
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
  }
  return config;
});

export default instance;
