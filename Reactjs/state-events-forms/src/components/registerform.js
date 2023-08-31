import { Button, Form } from "react-bootstrap";

export default function RegisterForm({handleClick,handleChange,state,usernameRef}) {

    return (
        <>
            <Form onSubmit={handleClick}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username" ref={usernameRef} onChange={handleChange} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>

        {/* <h1>Total Users {state.users.length}</h1> */}
        </>
    )
}