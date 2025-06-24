import { useAuthContext } from "./useAuthContext";
import { useWorkoutsContext } from "./UseworkoutsContext";

import React from 'react'

const UseLogout = () => {
    const {dispatch }=useAuthContext()
    const {dispatch:workoutsDispatch}=useWorkoutsContext()
    const logout=()=>{
        // remove the user from the local starage
        localStorage.removeItem("user")

        // dispatch logout action

        dispatch({type:"logout"})
        workoutsDispatch({type:"SET_WORKOUTS",payload:null})
    }
  return {logout}
}

export default UseLogout