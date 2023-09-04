import { Card, Col } from "react-bootstrap";

export default function MovieCard(props) {
    return (
        <Col key={props.idx}>
            <Card>
                <Card.Img variant="top" src="https://picsum.photos/200/100" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a longer card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}