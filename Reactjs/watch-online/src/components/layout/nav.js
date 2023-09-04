import { Container, Navbar, Nav } from "react-bootstrap";
import AuthModal from "./header/modal";
import React from "react";

export default function Navigation() {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Free Movies.mp4</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets" onClick={() => setModalShow(true)}>Login/Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <AuthModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}