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
            const user = JSON.parse(userString); // ✅ Parse string into object
            dispatch({ type: "login", payload: user });
        }
    }, [])
    console.log("Authcontext state:", state)

    return (
        <AuthContext.Provider value={{ ...state, dispatch }}>
            {children}
        </AuthContext.Provider>)
}