import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditFesModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
       
    }
    
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'FestaZyrtare', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id:event.target.Id.value,
                Festa: event.target.Festa.value,
                Dita: event.target.Dita.value,
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
    render() {
        return (
            <div className="container">

                <Modal
                    {...this.props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Edit Festa
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>Id: </Form.Label>
                                        <Form.Control type="text" name="Id" required
                                            defaultValue={this.props.id}
                                            placeholder="FestaZyrtare" />
                                    </Form.Group>
                                    <Form.Group controlId="Festa">
                                        <Form.Label>Festa</Form.Label>
                                        <Form.Control type="text" name="User" required
                                            defaultValue={this.props.Fe}
                                            placeholder="FestaZyrtare" />
                                    </Form.Group>
                                    <Form.Group controlId="Dita">
                                        <Form.Label>Data: </Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="Dita"
                                            required
                                            placeholder="Dita"
                                            defaultValue={this.props.Di}
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Festa
                        </Button>
                                    </Form.Group>
                                </Form>
                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}