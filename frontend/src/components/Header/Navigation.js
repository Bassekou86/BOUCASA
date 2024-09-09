import React from "react"
import "../../style/Boucasa.css"
import logo from "../../assets/images/logo.jpg"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Navigation = () => {
    return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="logo" 
            />
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Accueil">Accueil</Nav.Link>
              <Nav.Link href="#link">Produits</Nav.Link>
              <Nav.Link href="#link">Services</Nav.Link>
              <Nav.Link href="#link">Blog</Nav.Link>
              <Nav.Link href ="/Contact">Contact</Nav.Link>
                <NavDropdown title="Menu" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Recherche</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Connexion
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
    
  );
}
export default Navigation