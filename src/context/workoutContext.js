import { createContext,useReducer } from "react"

export const workoutsContext = createContext()

export const workoutsReducer=(state,action)=>{
switch(action.type){
case "SET_WORKOUTS":
return{
    workouts:action.payload
}    
case  "CREATE_WORKOUTS":
    return {
        workouts:[action.payload,...state.workouts]
    }
case "DELETE_WORKOUT":
    return{
        ...state,
    workouts: state.workouts.filter(workout => workout._id !== action.payload)
    }
    default:{
        return state
    }
}
}
export const WorkoutContextProvider = ({ children }) => {
const [state,dispatch]=useReducer(workoutsReducer,{
    workouts:[]
})


    return (
        <workoutsContext.Provider value={{...state,dispatch}}>
            {children}
        </workoutsContext.Provider>
    )
}
