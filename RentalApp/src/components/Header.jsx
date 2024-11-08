import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';


function Header(){
return(
  <Navbar className="bg-body-tertiary" expand="lg" fixed="top" >
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mx-auto">
        <Nav.Link as={Link} to="/" >Etusivu</Nav.Link> 
        <Dropdown>
          <Dropdown.Toggle variant='light' id="dropdown-basic">
            Vuokrattava kalusto
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/products/saunaTrailer">Saunakärry</Dropdown.Item>
            <Dropdown.Item as={Link} to="/products/perakarry">Peräkärry</Dropdown.Item>
            <Dropdown.Item as={Link} to="/products/agrikaatti">Agrikaatti</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> 
        <Nav.Link as={Link} to="/reservations" >Varauskalenteri</Nav.Link> 
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
);
}
export default Header;
