import { Col, Row,Container, Stack } from "react-bootstrap";

function Footer(){
    return(
        <footer>
            <Container fluid>
            <Row className='bg-dark text-white'>
                <Col className='text-center p-3'>
                <h4>Yhteistiedot</h4>
                <p>         
                    Puh. 040-7143451
                    <br />
                    Y-tunnus. 1368433-3
                    <br />
                    Email. kuivistoanssi@gmail.com
                    </p>
                </Col>
            </Row>
            </Container>
        </footer>
    );
}
export default Footer;