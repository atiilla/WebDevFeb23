import React from 'react'
import { useAuth } from './auth'

function Profile() {
    const {state,logout} = useAuth()
  return (
    <div>
        <h1>Profile</h1>
        <h2>Welcome, {state.username}!</h2>
        <button className='btn btn-primary' onClick={logout}>Logout</button>
    </div>
  )
}

export default Profile