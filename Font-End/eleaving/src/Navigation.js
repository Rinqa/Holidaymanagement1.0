import React,{Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar,Nav} from 'react-bootstrap';

export class Navigation extends Component{

    render(){
        return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="justify-content-end text-white">
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/">
                    Home
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/apliko">
                    Apliko
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/profili">
                    Profili
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/pushimet">
                    Pushimet
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/calendar">
                    Festat Zyrtare
                </NavLink>
                <NavLink className="d-inline p-2 bg-transparent text-white" to="/admin">
                    Admin
                </NavLink>
                
                

                </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}