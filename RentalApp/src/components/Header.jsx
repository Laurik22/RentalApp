import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'
import { NavDropdown } from 'react-bootstrap';

function Header(){
return(
  <Navbar className='shadow' expand="md" fixed="top" bg='light'>
     <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mx-auto' >

        <NavDropdown  title='Vuokrattava kalusto' id="basic-nav-dropdown" className='me-4' variant='light' >
            <NavDropdown.Item as={Link} to="/products/saunaTrailer">Saunakärry</NavDropdown.Item >
            <NavDropdown.Item as={Link} to="/products/perakarry">Peräkärry</NavDropdown.Item>
        </NavDropdown> 
        <Nav.Link as={Link} to="/reservations" className='me-4'>Varauskalenteri</Nav.Link> 
        <Nav.Link className='me-4'>Vuokrausehdot </Nav.Link> 
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>

);
}
export default Header;