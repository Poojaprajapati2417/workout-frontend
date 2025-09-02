import React from 'react'
import { useEffect } from 'react'
import axios from "../../axiosConfig.js"; // ✅ import custom Axios
import { useWorkoutsContext } from '../../components/Hooks/UseworkoutsContext.js'
import { useAuthContext } from "../../components/Hooks/useAuthContext.js"
import { Link } from 'react-router-dom';


//components
import Workoutdetails from "./../../components/workoutDetails/Workoutdetails.jsx"
import Workoutform from '../../components/workoutform/Workoutform.jsx'
const Home = () => {
    const { workouts, dispatch } = useWorkoutsContext()
    const { user } = useAuthContext()
    console.log(user) // safe optional chaining

    useEffect(() => {
        const fetchworkout = async () => {
            try {
                const response = await axios.get("/workouts"); console.log(response.data)
                if (response.data) {
                    dispatch({ type: "SET_WORKOUTS", payload: response.data })
                }

            } catch (error) {
                console.log("something went wrong", error)
            }
        }
        if (user) {
            fetchworkout()
        }

    }, [dispatch, user])

    return (
        <div className='home'>
            <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <Workoutdetails key={workout._id} workout={workout} />

                ))}
            </div>
            <p>Strong today, stronger tomorrow. Log it. Own it. 💪🔥</p>
            <button className='button'><Link className="add-button" to="/form">Add more Workouts</Link></button>
        </div>
    )
}

export default Home