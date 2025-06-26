import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext.js"
import Swal from 'sweetalert2'
import axios from "../../axiosConfig.js"



const useLogin = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const Login = async (formvalue) => {
      console.log("🚀 Login fn started");

    setLoading(true)
    setError(null)

    try {
      const response = await axios.post("/user/login", formvalue)
    console.log("✅ Login API response:", response);
      console.log(response.data)
      if (response.data.Status !== "success") {
        setLoading(false)
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response.data.message,

        });

      }
      else {
        Swal.fire({
          title: response.data.message,
          icon: "success",
          draggable: true
        });
        // store user in localstorage for token
        localStorage.setItem("user", JSON.stringify(response.data.user))
        console.log(response.data.user)
        // update dispatch function useauthcontext with new user data to update context
        dispatch({ type: "login", payload: response.data.user })
        setLoading(false)
      }
    }


    catch (error) {
          console.log("❌ Login API error:", error);

      setLoading(false);
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }






  }
  return { Login, loading, error }
}

export default useLogin