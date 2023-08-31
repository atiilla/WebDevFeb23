import React, { useState,useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { Button } from 'react-bootstrap';
function Profile({setLoggedIn,setToken}) {
    let [user,setUser] = useState({})

    useEffect(()=>{
        let token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        setUser(decoded)
    },[])

    const logoutHandler=(e)=>{
        localStorage.removeItem("token") // remove from storage
        setLoggedIn(false) // user not logged in
        setToken("") // no token in state
    }

  return (
    <div>
    <h1>Profile Section</h1>
    <h2>Welcome, {user.username}</h2>
    <Button variant='danger' onClick={logoutHandler}>Logout</Button>
    </div>
  )
}

export default Profile