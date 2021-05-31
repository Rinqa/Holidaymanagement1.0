import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="white" expand="lg " className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/department">
                    Apliko
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/employee">
                    Profili
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/employee">
                    Pushimet
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/calendar">
                    Festat Zyrtare
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/employee">
                    Admin
                </NavLink>
                <NavLink className="d-inline p-2 bg-white text-dark" to="/employee">
                    Login
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}