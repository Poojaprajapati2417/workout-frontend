import React, { useState } from 'react'
import useSignUp from '../components/Hooks/UseSignUp'

const Signup = () => {
    const [formvalue, setFormvalue] = useState({
        email: "",
        password: ""
    })
    const {signup,loading,error}=useSignUp()
    const handleonChange = (e) => {
        const { name, value } = e.target
        setFormvalue({
            ...formvalue,
            [name]: value
        })
    }
    const handlesubmit = async(e) => {
        e.preventDefault()
        await signup(formvalue)
    }
    return (
        <form className='signup' onSubmit={handlesubmit} >
            <h3>Sign Up</h3>
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
            <button disabled={loading} type='submit'>signup</button>
            {error && <div className='error'>{error}</div>}
        </form>
    )
}

export default Signup