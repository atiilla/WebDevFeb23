import { Tab, Tabs } from "react-bootstrap";
import Login from "./login";
import Register from "./register";

export default function TabsMenu() {
    return (
        <Tabs
            defaultActiveKey="login"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="login" title="Login">
                <Login/>
            </Tab>
            <Tab eventKey="register" title="Register">
                <Register/>
            </Tab>
        </Tabs>
    )
}