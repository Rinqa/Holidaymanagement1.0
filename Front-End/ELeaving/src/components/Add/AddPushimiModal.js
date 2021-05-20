import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddPushimiModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { katPush: [] };
    }
    componentDidMount() {
        fetch(process.env.REACT_APP_API + 'KategoriaPushimit')
            .then(response => response.json())
            .then(data => {
                this.setState({ katPush: data });
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Pushimet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              
                Pushimi: event.target.Pushimi.value,
                Kategoria: event.target.Kategoria.value
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
                            Add Department
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Pushimi">
                                        <Form.Label>Pushimi</Form.Label>
                                        <Form.Control type="text" name="Pushimi" required
                                            placeholder="Pushimi" />
                                    </Form.Group>
                                    <Form.Group controlId="Kategoria">
                                        <Form.Label>Kategoria Pushimit</Form.Label>
                                        <Form.Control as="select">
                                            {this.state.katPush.map(com =>
                                                <option key={com.Id}>{com.Kategoria}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Pushimi
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