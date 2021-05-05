import React, { Component } from 'react';
import logo from './LogoL.svg';
import { Table,Row,Col,Form,Button,Container,label } from 'react-bootstrap';
export class LoginKompania extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            
    <Container>
        <Row>
            <Col lg={3} className="p-3 m-auto">
                <div className="LoginBox p-5">
                    
                    <Form className="mt-3">
                        <Form.Group>
                        <img className="LoginImg"  alt=""/>
                            
                        </Form.Group>
                        <Form.Group>
                            
                            Email:<Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group>
                             Password:<Form.Control type="password" placeholder="Password" />
                        </Form.Group>

                        {/* <Form.Group className="float-left">
                             <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group> */}

                       

                        <Button className="btn-block" variant="success" type="submit">
                            Submit
                         </Button>
                         
                        Need a Account:<a className="ml-2" href="/RegjisterKompania">Regjister</a>

                    </Form>
                </div>
            </Col>   
        </Row>
    </Container> 

        )
    }
}