import React, { useState } from "react";
import { useAuthContext } from "./useAuthContext.js"
import Swal from 'sweetalert2'
import axios from "axios"



const useSignUp = () => {

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const { dispatch } = useAuthContext()

  const signup = async (formvalue) => {
    setLoading(true)
    setError(null)

    try {
      const response = await axios.post("/user/signup", formvalue)

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
        localStorage.setItem("user", response.data.token)
        console.log(response.data.token)
        // update dispatch function useauthcontext with new user data to update context
        dispatch({ type: "login", payload: response.data.data })
        setLoading(false)
      }
    }


    catch (error) {
      setLoading(false);
      setError(error.message);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error.message,
      });
    }






  }
  return { signup, loading, error }
}

export default useSignUp