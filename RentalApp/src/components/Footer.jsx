import { Col, Row,Container } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <Container fluid>
            <Row className='bg-dark text-white'>
                <Col>
                col1
                </Col>
                <Col>
                col2
                </Col>
                <Col>
                col3
                </Col>
            </Row>
            </Container>
        </footer>
    );
}
export default Footer;