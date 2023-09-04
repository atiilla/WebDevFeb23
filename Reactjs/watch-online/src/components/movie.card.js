import { Card, Col } from "react-bootstrap";

export default function MovieCard(props) {
    return (
        <Col key={props.idx}>
            <Card>
                <a href="#" onClick={()=>props.handleDetail(props.movie)}><Card.Img variant="top" src={props.movie.image_url} className="movie_image"/></a>
                <Card.Body>
                    <Card.Title>{props.movie.name}</Card.Title>
                    <Card.Text>
                        {props.movie.desc.substring(0,60)}...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}