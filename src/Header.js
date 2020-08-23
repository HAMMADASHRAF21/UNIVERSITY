import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom'
import { Navbar ,Nav , NavDropdown } from 'react-bootstrap';


function Header() {
    return (
        <div>

<Navbar sticky="top" collapseOnSelect expand="lg" bg="danger" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link > <Link style={{textDecoration:'none',color:'white'}} to="/">  HOME</Link></Nav.Link>
      <Nav.Link ><Link style={{textDecoration:'none',color:'white'}} to="/item">ITEM </Link></Nav.Link>
      <Nav.Link ><Link style={{textDecoration:'none',color:'white'}} to="/search">SEARCH </Link></Nav.Link>
      <Nav.Link ><Link style={{textDecoration:'none',color:'white'}} to="/contact">CONTACT</Link></Nav.Link>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>

        </div>
      
    )
}

export default Header
