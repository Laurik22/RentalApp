import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'
import { NavDropdown } from 'react-bootstrap';

function Header(){
return(
  <Navbar  expand="lg" fixed="top" style={{background: "linear-gradient(to right, #b2fefa, #0ed2f7)", display: 'flex', justifyContent: 'center'}}>
     <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='me-auto'>
        <Nav.Link as={Link} to="/home" >Etusivu</Nav.Link> 
        <NavDropdown title='Vuokrattava kalusto' id="basic-nav-dropdown" >
            <NavDropdown.Item as={Link} to="/products/saunaTrailer">Saunakärry</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/products/perakarry">Peräkärry</NavDropdown.Item>
        </NavDropdown> 
        <Nav.Link as={Link} to="/reservations">Varauskalenteri</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>

);
}
export default Header;