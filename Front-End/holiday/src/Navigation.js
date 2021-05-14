import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './LogoL.svg';

export class Navigation extends Component {

    render() {
        return (
<Navbar  collapseOnSelect expand="lg" bg="white" variant="light">
<Navbar.Brand href="#home">
      <img
        src="/logo.svg"
        width="200"
        height="90"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
        src={logo}
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link href="/home"><i class="fa fa-fw fa-dashboard"></i>Dashboard</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1"><i class="fa fa-fw fa-calendar"></i>Calendar</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2"><i class="fa fa-fw fa-envelope"></i>Njoftimet</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-3"><i class="fa fa-fw fa-home"></i>Company</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4"><i class="fa fa-fw fa-file"></i>Documents</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-5"><i class="fa fa-bar-chart" arial-hidden="true"></i>Reports</Nav.Link>
  </Nav.Item>
  
</Nav>
    </Nav>
    <Nav>
      <Nav.Link  href="/Login" >Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Welcome: Admin
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        )
    }
}