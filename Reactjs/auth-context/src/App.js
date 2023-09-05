import React from 'react'
import { useAuth } from './auth'
import Login from './login'
import Profile from './profile'
import Register from './register'

function App() {
  const {state} = useAuth()
  return (
    <div>
    {
      state ?
      <Profile/>
      :
      <>
      <Login/>
      <Register/>
      </>
    }
    
    
    </div>
  )
}

export default App