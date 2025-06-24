import { workoutsContext } from "../../context/workoutContext";
import { useContext } from "react";

export const useWorkoutsContext=()=>{
const context=useContext(workoutsContext)

if(!context){
    throw Error("useworkoutsContext must be used inside an WorkoutsContextProvider")
}
return context
}

