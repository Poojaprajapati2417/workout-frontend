import React from 'react'
import axios from "../../axiosConfig.js"; // ✅ import custom Axios
import { useWorkoutsContext } from '../Hooks/UseworkoutsContext'
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useAuthContext } from '../Hooks/useAuthContext.js'


const Workoutdetails = ({ workout }) => {
  const { user } = useAuthContext()
  const { dispatch } = useWorkoutsContext()
  const handleclick = async () => {

    try {
      if (!user) {
        return
      }
      const response = await axios.delete("/workouts/" + workout._id)
      if (response.status === 200) {
        console.log("Workout deleted successfully")
        dispatch({ type: "DELETE_WORKOUT", payload: workout._id })  // Redux/Context update
      }
    }
    catch (error) {
      console.error("Error deleting workout:", error.response?.data?.message || error.message)
    }
  }

  return (
    <div className="workout-details">
      <h4>{workout.Title}</h4>
      <p><strong>Load (kg):</strong>{workout.Load}</p>
      <p><strong>Reps:</strong>{workout.Reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className='material-symbols-outlined' onClick={handleclick}><i class="fa-solid fa-trash"></i></span>
    </div>
  )
}

export default Workoutdetails