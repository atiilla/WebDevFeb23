import React from 'react'
import { Button, Form } from 'react-bootstrap'

function RegisterForm() {
    return (
        <Form>
        <h1>Register</h1>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default RegisterForm