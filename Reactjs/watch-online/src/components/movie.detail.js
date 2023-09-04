import { Modal } from "react-bootstrap";

export default function MovieDetail({show,setShow,singleMovie}) {
    return (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>{singleMovie.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <img src={singleMovie.image_url} className="w-25 p-4 d-block"/>

            <span className="display-5">
                {singleMovie.desc}
            </span>
            </Modal.Body>
        </Modal>
    )
}