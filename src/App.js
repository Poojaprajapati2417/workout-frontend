import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import "./index.css"
import react from "react"
//components and pages
import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar/Navbar.jsx"
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useAuthContext } from "./components/Hooks/useAuthContext.js";
import Workoutform from "./components/workoutform/Workoutform.jsx";
import LandingPage from "./pages/LandingPage.jsx";
function App() {
  const { user } = useAuthContext()
  return (
    <div className="app">

      <Navbar />
      <div className="pages" >
        
        <Routes>
          <Route path="/home" element={<Home /> } />
          <Route path="/login" element={!user?<Login /> :<Home/>} />
          <Route path="/signup" element={!user?<Signup /> :<Home/>} />
          <Route path="/form" element={<Workoutform />} />
          <Route path="/" element={!user?<LandingPage /> :<Home/>}/>

        </Routes>

      </div>

    </div>
  );
}

export default App;
