import { Button, Modal } from "react-bootstrap";
import TabsMenu from "./tabs.menu";

export default function AuthModal(props) {
    return (
        <Modal
        {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Authentication
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <TabsMenu/>
            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}