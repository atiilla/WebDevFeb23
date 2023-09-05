import { createContext, useContext, useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  // Initialize your state as an object with a username property
  const [state, setState] = useState();
  // const [state,setState] = useState(localStorage.getItem('user'))
  const [isLoggedIn,setIsLoggedIn] = useState(false)

  const login = (obj)=>{
    fetch("https://teamnetflixapp-backend.onrender.com/users/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
      let decoded = jwt_decode(data.token)
      localStorage.setItem('user',JSON.stringify(decoded))
      setState(decoded)
      setIsLoggedIn(true)
    })
    .catch(err=>{
      console.log(err)
      setIsLoggedIn(false)
    })

  }

  const logout = ()=>{
    localStorage.removeItem('user')
    setState(null)
    setIsLoggedIn(false)
  }

  const register = (obj)=>{
    fetch("https://teamnetflixapp-backend.onrender.com/users/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(obj)
    })
    .then(res=>res.json())
    .then(data=>{
      delete data['password'];
      localStorage.setItem('user',JSON.stringify(data))
      setState(data)
      setIsLoggedIn(true)
    })
    .catch(err=>{
      console.log(err)
      setIsLoggedIn(false)
    })
  }


  useEffect(()=>{ // this will run only once
    let user = localStorage.getItem('user') // retrieve user from storage

    if(user){
      setState(JSON.parse(user))
      setIsLoggedIn(true)
    }
  },[])


  return (
    <AuthContext.Provider value={{
        state,
        login,
        logout,
        isLoggedIn,
        register
    }}>

      {children}
    </AuthContext.Provider>
  );
}
