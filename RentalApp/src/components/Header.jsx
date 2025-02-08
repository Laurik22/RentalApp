import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import '../App.css'
        
function Header(){
  
return(
  <Navbar className='shadow' bg='primary' variant='dark' expand="md" fixed="top">
     <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" va/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='mx-auto' >            
        <Nav.Link as={Link}  to="/sauna" className='me-4'>Saunakärryn vuokraus</Nav.Link> 
        <Nav.Link  as={Link} to= "/rentalconditions" className='me-4'>Vuokrausehdot </Nav.Link> 
      </Nav>
    </Navbar.Collapse>
    </Container>
</Navbar>

);
}
export default Header;