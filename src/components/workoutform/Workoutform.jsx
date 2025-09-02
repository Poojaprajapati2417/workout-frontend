import React, { useState } from 'react'
import { useWorkoutsContext } from '../Hooks/UseworkoutsContext'
import axios from "../../axiosConfig.js"; // ✅ import custom Axios
import { useAuthContext } from '../Hooks/useAuthContext.js'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Workoutform = () => {
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const { dispatch } = useWorkoutsContext()
  const [formdata, setFormdata] = useState({
    Title: "",
    Load: "",
    Reps: ""
  })
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  // handle change function
  const handlechange = (e) => {
    const { name, value } = (e.target)

    setFormdata({
      ...formdata,
      [name]: value
    })
  }
  // handle submit function

  const handlesubmit = async (e) => {
    e.preventDefault()
    if (!user) {
      setError("You must be logged in!!")
      return
    }
    try {
      console.log("User before submit:", user);

      const submitresponse = await axios.post("workouts/", formdata)
      console.log(submitresponse.data)
      if (submitresponse.data.status === "success") {
        console.log(" Workout added")
        setFormdata({
          Title: "",
          Load: "",
          Reps: ""
        })
        setError(null)
        setEmptyFields([])
        dispatch({ type: "CREATE_WORKOUTS", payload: submitresponse.data.workout })
        navigate("/")
        Swal.fire({
          title: "Great!!",
          text: "You are one step closer to your fitness! ",

          icon: "success",
          draggable: true

        });
      } else {
        console.log("No response got")
        setError(submitresponse.data.message)

        setEmptyFields(submitresponse.data.emptyFields)

      }
    } catch (error) {
      console.log("something went wrong", error)
      if (error.response && error.response.data) {
        setError(error.response.data.message); // ✅ Show error in UI
        setEmptyFields(error.response.data.emptyFields || []); // ✅ Highlight empty fields
      }
    }
  }
  return (
    <form className='create' onSubmit={handlesubmit}>
      <h3>Add a new workout</h3>

      {/* input for title */}
      <label htmlFor="">Exercise Title:</label>
      <input type="text"
        value={formdata.Title}
        onChange={handlechange}
        name='Title'
        className={emptyFields.includes("Title") ? "error" : ""} />

      {/* input for Load */}
      <label htmlFor="">Load (in Kg): </label>
      <input type="number"
        value={formdata.Load}
        onChange={handlechange}
        name='Load'
        className={emptyFields.includes("Load") ? "error" : ""} />

      {/* input for reps */}
      <label htmlFor="">Reps: </label>
      <input type="number"
        value={formdata.Reps}
        onChange={handlechange}
        name='Reps'
        className={emptyFields.includes("Reps") ? "error" : ""} />



      <button>Add Workout</button>
      {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default Workoutform