import { Container, Navbar, Nav } from "react-bootstrap";
import AuthModal from "./header/modal";
import React, { useContext, useEffect, useState } from "react";
import { isLoggedIn } from "../../utils";
import jwt_decode from "jwt-decode";
import { DataContext } from "../../context";

export default function Navigation({authfunc}) {
    const [modalShow, setModalShow] = React.useState(false);
    const [username,setUsername] = useState("")
    const DataConsume = useContext(DataContext)
    useEffect(()=>{
        let token = localStorage.getItem('token') || ""
        isLoggedIn(token)
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            // {
            //     "msg": "Invalid Token"
            // }
            if(!data.msg){
                var decoded = jwt_decode(token);
                setUsername(decoded.username)
            }

        })
    },[])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">FreeMovie.mp4</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>

                        </Nav>
                        <Nav>
                            {
                                username!=="" ?
                                <Nav.Link href="#">Welcome {username}</Nav.Link>
                                :
                                <Nav.Link href="#deets" onClick={() => setModalShow(true)}>Login/Register</Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                {
                    console.log(DataConsume)
                }
            </Navbar>
            <AuthModal
                show={modalShow}
                authfunc={authfunc}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}