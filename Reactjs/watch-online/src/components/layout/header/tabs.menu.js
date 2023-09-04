import { Tab, Tabs } from "react-bootstrap";
import Login from "./login";
import Register from "./register";

export default function TabsMenu({authfunc}) {
    return (
        <Tabs
            defaultActiveKey="login"
            id="fill-tab-example"
            className="mb-3"
            fill
        >
            <Tab eventKey="login" title="Login">
                <Login authfunc={authfunc}/>
            </Tab>
            <Tab eventKey="register" title="Register">
                <Register authfunc={authfunc}/>
            </Tab>
        </Tabs>
    )
}