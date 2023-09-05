import React from 'react'
import { useAuth } from './auth'

function Register() {
    const {register} = useAuth();
    const [user,setUser] = React.useState({})
    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }
  return (
    <div>
    <h1>Register</h1>
    <input type='text' placeholder='username' name="username" onChange={handleChange}/>
    <input type="text" placeholder='email' name="email" onChange={handleChange}/>
    <input type="password" placeholder='password' name="password" onChange={handleChange}/>
    <button className='btn btn-primary' onClick={()=>register(user)}>Register</button>
    </div>
  )
}

export default Register