import React from 'react'
import { Button, Form } from 'react-bootstrap'

function LoginForm({handleChange,handleSubmit}) {
    return (
        <Form onSubmit={handleSubmit}>
        <h1>Login</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={handleChange} placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" onChange={handleChange} placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>confirmEmail</Form.Label>
                <Form.Control type="email" name="confirmEmail" onChange={handleChange} placeholder="confirmEmail" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default LoginForm