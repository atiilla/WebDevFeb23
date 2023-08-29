import { useState } from "react"

export default function Movies() {

   const [state,setState] = useState([])
   
    const login = (e) => {
        fetch('https://movie-backend-qq9a.onrender.com/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: 'vlad',
                password: '12345'
            })
        })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem('user', JSON.stringify(data))
            })
    }

    const getMovies = (e)=>{
        let token = JSON.parse(localStorage.getItem('user')).token
        fetch('https://movie-backend-qq9a.onrender.com/movies',{
            headers:{
                'Authorization':`Bearer ${token}`
            }
        })
        .then(res=>res.json())
        .then(movies=>{
            // save movies data
            setState(movies)
        })
    }

    const addUser = ()=>{
        // names.push('john')
        // names.push('khalid')
    }

    const getUser =()=>{
        // console.log(names)
    }

    return (
        <div>
        {
        }
            <button className='btn btn-lg btn-success rounded-0' onClick={login}>Login</button>
            <button className='btn btn-lg btn-dark rounded-0' onClick={getMovies}>Movies</button>
            <button className='btn btn-lg btn-primary rounded-0' onClick={addUser}>Add Username</button>
            <button className='btn btn-lg btn-dark rounded-0' onClick={getUser}>get Username</button>
            
            {
               
                state.map((movie,index)=>{
                    return <p>{movie.name}</p>
                })
              
               
            }

            
        </div>
    )
}