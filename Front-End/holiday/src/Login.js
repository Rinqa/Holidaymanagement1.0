import React, { Component } from 'react';
import { Row,Col,Form,Button,Container,fluid } from 'react-bootstrap';

export class Login extends Component {
    
    render() {
        return (
            
            <Container fluid >
        <Row className="p-3 m-auto">
            <Col lg={3} className="p-3 m-auto">
                <div className="LoginBox p-3">
                    
                    <Form className="mt-3">
                        <Form.Group className="p-3 m-auto">
                            <h5>Login with Google Account:</h5>
                            
                        </Form.Group>
                        <Form.Group className="p-3 m-auto">
                            
                        <Button className="btn" variant="" type="submit">
                        <img alt="Google" src="https://www.google.com/favicon.ico"></img> Login whith Google
                         </Button>
                        </Form.Group>
                  
                    </Form>
                </div>
            </Col>   
        </Row>
        </Container>

        )
    }
}