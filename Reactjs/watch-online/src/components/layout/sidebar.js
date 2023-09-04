import { ListGroup } from "react-bootstrap";

export default function Sidebar() {
    return (
        <div className="bg-secondary text-light p-3 rounded">
        <h1 className="h4">Categories</h1>
            <ListGroup>
                <ListGroup.Item className="rounded-0">Dapibus ac facilisis in</ListGroup.Item>
                <ListGroup.Item className="rounded-0">Morbi leo risus</ListGroup.Item>
                <ListGroup.Item className="rounded-0">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
        </div>
    )
}