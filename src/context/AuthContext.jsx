import { createContext, useEffect, useReducer } from "react";


export const AuthContext = createContext()

export const authReducer = (state, action) => {
    switch (action.type) {
        case "login":
            return { user: action.payload }
        case "logout":
            return { user: null }
        default:
            return state
    }


}
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer,
        { user: null })
    useEffect(() => {
        const userString = localStorage.getItem("user");
        if (userString) {
            try {
                const user = JSON.parse(userString);
                dispatch({ type: "login", payload: user }); // user object with token
            } catch (error) {
                console.error("Error parsing user from localStorage:", error);
            }
        }
    }, [])
    console.log("Authcontext state:", state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>)
}