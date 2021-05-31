import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar bg="dark" expand="lg " className="justify-content-end">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/department">
                    Apliko
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/employee">
                    Profili
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/employee">
                    Pushimet
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/calendar">
                    Festat Zyrtare
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/employee">
                    Admin
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/employee">
                    Login
                </NavLink>

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}