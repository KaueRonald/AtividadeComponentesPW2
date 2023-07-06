import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './index.css';

function MyNavbar() {
  return (
    <Navbar expand="lg" className="navbar">
      <Navbar.Brand href="#" className="navbar-brand">Meu Site</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarCollapse" className="navbar-toggler" />
      <Navbar.Collapse id="navbarCollapse">
        <Nav className="ml-auto">
          <Nav.Link href="/" className="nav-link">Início</Nav.Link>
          <Nav.Link href="/sobre" className="nav-link">Sobre</Nav.Link>
          <Nav.Link href="/reactbootstrap" className="nav-link">React-Bootstrap</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;