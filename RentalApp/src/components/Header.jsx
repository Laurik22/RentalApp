import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';


function Header(){
return(
  <Navbar className="customNav" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Etusivu</Nav.Link> 
            <Nav.Link as={Link} to="/equipmentList"> Vuokrattava Kalusto</Nav.Link>  
            <Nav.Link as={Link} to="/contact">Ota yhteyttä</Nav.Link>  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
);
}
export default Header;
