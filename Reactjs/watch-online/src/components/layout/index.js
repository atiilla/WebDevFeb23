import { Col, Container, Row } from "react-bootstrap";
import Header from "./header/header";
import Sidebar from "./sidebar";
import Footer from "./footer";

export default function Layout({children}) {
    return (
        <>
            <Header />
            <Container fluid>
                <Row className="justify-content-center me-0 my-3">
                    <Col md={3}>
                        <Sidebar />
                    </Col>
                    <Col md={9} className="bg-secondary text-light p-3 rounded">
                        {children}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    )
}