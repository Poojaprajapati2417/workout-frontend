import React, { useState } from 'react'
import useLogin from '../components/Hooks/UseLogin'

const Login = () => {
    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })
    const {Login,error,loading}=useLogin()
    const handleonChange = (e) => {
        const { name, value } = e.target
        setFormvalue({
            ...formvalue,
            [name]: value
        })
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
        await Login(formvalue)

    }
    return (
        <form className='login' onSubmit={handlesubmit} >
            <h3>Login</h3>
            <label>Email:</label>
            <input
            name='email'
                type="email"
                onChange={handleonChange}
                value={formvalue.email}
            />
            <label>Password:</label>
            <input
            name='password'
                type="password"
                onChange={handleonChange}
                value={formvalue.password}
            />
            <button disabled={loading} type='submit'>login</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Login