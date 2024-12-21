import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'

function Header(){
return(
  <Navbar className='shadow' expand="md" fixed="top"  variant='light' style={{backgroundColor:'#000000'}}>
     <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mx-auto' >            
        <Nav.Link as={Link} to="/products/sauna" className='me-4'>Saunakärryn vuokraus</Nav.Link> 
        <Nav.Link as={Link} to="/reservations" className='me-4'>Varauskalenteri</Nav.Link> 
        <Nav.Link className='me-4'>Vuokrausehdot </Nav.Link> 
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>

);
}
export default Header;