import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class AddPozModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { push: [] };
    }
    componentDidMount() {
        fetch(process.env.REACT_APP_API + "Pozita")
            .then(response => response.json())
            .then(data => {
                this.setState({ push: data })
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Pozitat', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Pozita: event.target.Users.value,
                
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
                            Add Application
                    </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                        <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>AplikimiId</Form.Label>
                                        <Form.Control type="text" name="AplikimiId" required
                                            disabled
                                            defaultValue={this.props.id}
                                            placeholder="Aplikimet" />
                                    </Form.Group>

                                    <Form.Group controlId="Users">
                                        <Form.Label>Useri</Form.Label>
                                        <Form.Control type="text" name="User" required
                                            defaultValue={this.props.idU}
                                            placeholder="Useri" />
                                    </Form.Group>
                                    <Form.Group controlId="Pushimi">
                                        <Form.Label>Pushimi</Form.Label>
                                        <Form.Control as="select" defaultValue={this.props.pu}>
                                            {this.state.push.map(com =>
                                                <option key={com.Id}>{com.Pushimi}</option>)}

                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="DataFillimit">
                                        <Form.Label>DataFillimit</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="DataFillimit"
                                            required
                                            placeholder="DataFillimit"
                                            defaultValue={this.props.df}
                                        />


                                    </Form.Group>
                                    <Form.Group controlId="DataMbarimit">
                                        <Form.Label>DataMbarimit</Form.Label>
                                        <Form.Control
                                            type="date"
                                            name="DataMbarimit"
                                            required
                                            placeholder="DataMbarimit"
                                            defaultValue={this.props.dm}
                                        />


                                    </Form.Group>
                                    <Form.Group controlId="Pershkrimi">
                                        <Form.Label>Pershkrimi</Form.Label>
                                        <Form.Control type="text" name="Perskrimi" required
                                            defaultValue={this.props.pr}
                                            placeholder="Useri" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Application
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