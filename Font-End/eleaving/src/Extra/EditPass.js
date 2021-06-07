import React from 'react'


import { Component } from 'react'
import { Button, Row, Col, Form } from 'react-bootstrap';
import { EditPassModal } from '../components/Edit/EditPassModal';
export class EditPass extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        if (window.confirm('Are you sure?')) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'changePassword/1', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                password: event.target.password.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);

            },
                (error) => {
                    alert('Failed');
                })}
    }
    render() {
        return (
            <div className="container">



            <div className="pass">

                            <Form onSubmit={this.handleSubmit}>



                                <Form.Group controlId="password">
                                    <Form.Label>password</Form.Label>
                                    <Form.Control type="password" name="password" required
                                        placeholder="password" />
                                </Form.Group>

                                <Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Update Password
                    </Button>
                                </Form.Group>
                            </Form>
                       </div>

        </div>

        )
    }
}
export default EditPass