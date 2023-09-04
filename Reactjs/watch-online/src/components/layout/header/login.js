import { Button, Form } from "react-bootstrap";

export default function Login({authfunc}) {
    const [handleLogin,handleChange,handleRegister] = authfunc
    return (
        <Form onSubmit={handleLogin}>
        
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" name="username" onChange={handleChange} className="bg-secondary text-light" placeholder="Enter username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" onChange={handleChange} className="bg-secondary text-light" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}