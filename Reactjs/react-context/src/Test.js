import React from 'react'
import { useAuth } from './AuthProvider'

function Test() {
    const {state,changeUsername} = useAuth();
  return (
    <div>
        <h1>username is {state.username}</h1>
        <button onClick={()=>changeUsername('0x0x0x0x')}>change it</button>
    </div>
  )
}

export default Test