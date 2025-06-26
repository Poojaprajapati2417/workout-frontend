// axiosConfig.js
import axios from "axios";

// Axios instance
const instance = axios.create({
  baseURL: "https://workout-backend-1-rb2d.onrender.com",
  withCredentials: true,
});

console.log("✅ Axios instance created with baseURL:", process.env.REACT_APP_API_BASE_URL);

// Request Interceptor
instance.interceptors.request.use((config) => {
   const userString = localStorage.getItem("user");

  if (userString) {
    const user = JSON.parse(userString); // ✅ now it's an object
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user.token}`;
    }
  }
  console.log("👉 Axios Request URL:", config.baseURL + config.url);  // 🧠 Check this in browser console

  return config;
});

export default instance;
