import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './LogoL.svg';
export class Navigation extends Component {

    render() {
        return (
            
          

  
  <Navbar bg="light" variant="light" >
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="300"
        height="100"
        className="d-inline-block align-top"
      />{' '}
      
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
  </Navbar>
        )
    }
}