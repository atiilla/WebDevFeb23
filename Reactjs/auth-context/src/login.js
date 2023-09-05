import React from 'react'
import { useAuth } from './auth'

function Login() {
    const {login} = useAuth()
    const [user,setUser] = React.useState({})

    const handleChange=(e)=>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

  return (
    <div>
    <input type='text' placeholder='username' name="username" onChange={handleChange}/>
    <input type='password' placeholder='password' name="password" onChange={handleChange}/>
    <button className='btn btn-primary' onClick={()=>login(user)}>Login</button>
    </div>
  )
}

export default Login