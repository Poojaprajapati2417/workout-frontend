import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../../pages/Login.jsx'
import Signup from '../../pages/Signup.jsx'
import UseLogout from '../Hooks/UseLogout.js'
import { FiLogOut } from "react-icons/fi";
import { useAuthContext } from '../Hooks/useAuthContext.js'
import { FaDumbbell } from "react-icons/fa";

const Navbar = () => {

  const { logout } = UseLogout()
  const { user } = useAuthContext()


  const handleLogout = () => {
    logout()
  }
  console.log(user)

  return (

    <header>

      <div className='container'>
        <div className='header-left'>

          <div className='logo-outer'>
            <Link to="/" className='app-name'>
              <span className="logo"><FaDumbbell /></span>Workout Buddy
            </Link>
          </div>
          {user &&
            (<div className='user-logout-box'>

              <p style={{ color: "#333" }} >Welcome, <span style={{ color: "#1aac83" }}>{user.email?.split("@")[0]}</span></p> {/* ✅ Now it works */}

            </div>)}

        </div>
        <div>
          {user &&
            (<div style={{margin:"auto"}}>

              <button className="logout-button" onClick={handleLogout}><FiLogOut /></button>

            </div>)}
          {!user &&
            (<div className='header-right'>
              <Link className='login' to="/login">Login</Link>
              <Link className="signup" to="/signup">Signup</Link>
            </div>)}
        </div>
      </div>
    </header>
  )
}

export default Navbar