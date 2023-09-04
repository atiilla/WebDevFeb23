import React, { useEffect, useState } from 'react'
import { isLoggedIn, login, register } from './helper/index'
import { Tab, Tabs } from 'react-bootstrap'
import LoginForm from './components/auth/login';
import RegisterForm from './components/auth/register';
import Profile from './components/profile';
import {Helmet} from 'react-helmet'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function App() {
    const [key, setKey] = useState('login');
    const [user, setUser] = useState({});
    const [loggedIn, setLoggedIn] = useState(false)
    const [token, setToken] = useState("")


    useEffect(() => {
        let token = localStorage.getItem('token') || ""
        isLoggedIn(token)
            .then(res => {
                if (res.status == 200) {
                    setLoggedIn(true)
                }
            })
            .catch(e => {
                setLoggedIn(false)
            })
    }, [loggedIn, token])

    const handleChange = e => {
        e.preventDefault();
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(user)
        // fetch operation
        login(user)
            .then(data => {
                console.log(data)
                // save token in storage
                localStorage.setItem('token', data.token)
                setToken(data.token)
                toast.success('🦄 Logged in!', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            })
    }

    return (
        <div className='container my-4'>
        <Helmet>
        </Helmet>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            {
                loggedIn ?
                    <Profile setLoggedIn={setLoggedIn} setToken={setToken} />
                    :
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3"
                    >
                        <Tab eventKey="login" title="Login">
                            <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
                        </Tab>
                        <Tab eventKey="register" title="Register now!">
                            <RegisterForm />
                        </Tab>
                    </Tabs>
            }


        </div>
    )
}

export default App