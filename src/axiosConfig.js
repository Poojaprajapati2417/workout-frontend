// axiosConfig.js
import axios from "axios";

// Axios instance
const instance = axios.create({
  baseURL:process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

console.log("✅ Axios instance created with baseURL:", process.env.REACT_APP_API_BASE_URL);

// Request Interceptor
instance.interceptors.request.use((config) => {
   const userString = localStorage.getItem("user");

  if (userString) {
    try {
      const user = JSON.parse(userString);
      if (user.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
    }
  }
  console.log("👉 Axios Request URL:", config.baseURL + config.url);  // 🧠 Check this in browser console

  return config;
});

export default instance;
