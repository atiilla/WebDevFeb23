import React, { useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { ToastContainer, toast } from 'react-toastify';
import { Button } from 'react-bootstrap';
function Profile({ setLoggedIn, setToken }) {
    let [user, setUser] = useState({})

    useEffect(() => {
        let token = localStorage.getItem('token');
        var decoded = jwt_decode(token);
        setUser(decoded)
    }, [])

    const logoutHandler = (e) => {

        toast.success('🦄 Logged out!', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
        setTimeout(() => {
            localStorage.removeItem("token") // remove from storage
            setLoggedIn(false) // user not logged in
            setToken("") // no token in state
        }, 2000)
    }

    return (
        <div>
            <h1>Profile Section</h1>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            {/* Same as */}
            <ToastContainer />
            <h2>Welcome, {user.username}</h2>
            <Button variant='danger' onClick={logoutHandler}>Logout</Button>
        </div>
    )
}

export default Profile