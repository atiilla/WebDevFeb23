import { Button, Container } from 'react-bootstrap'
import './style/style.css'
import { GiPenguin } from 'react-icons/gi'
import RegisterForm from './components/registerform'
import { useEffect, useRef, useState } from 'react'
import Test from './Test'
import CreatePost from './components/createPost'
import Login from './components/loginform'
export default function App() {

    const [state, setState] = useState({
        users: [],
        posts: [],
        loggedIn:false
    })

    const usernameRef = useRef();

    const [user, setUser] = useState({})

    useEffect(() => {
        let data = localStorage.getItem('data')
        if (data) {
            setState(JSON.parse(data))
        }
    },[])

    const handleClick = (e) => {
        e.preventDefault()
        console.log(usernameRef.current)

        setState(prevState => ({
            users: [...prevState.users, user]
        }))

    }


    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            id: Math.floor(Math.random() * Date.now()),
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = (e) => {
        e.preventDefault()
        let isUserLoggedIn = state.users.filter(userObj=>userObj.username === user.username && userObj.password === user.password)
        if(isUserLoggedIn.length>0){
            setState({
                loggedIn:true
            })
            localStorage.setItem('user',JSON.stringify(isUserLoggedIn))
        }
    }

    return (
        <Container className="text-light">
            <Button variant={"danger"} onClick={() => localStorage.setItem('data', JSON.stringify(state))}>Save All in DB</Button>
            <h1><GiPenguin className='text-light p-1 display-2 bg-primary' /> Application</h1>
            <div className='login'>
                <RegisterForm handleClick={handleClick} handleChange={handleChange} state={state} usernameRef={usernameRef} />
                <h1>login:</h1>
                <Login handleLogin={handleLogin} handleChange={handleChange}/>
            </div>
            {/* <Test myFun={state.myFun}/>   */}
            <CreatePost hidden={state.loggedIn}/>
        </Container>
    )
}