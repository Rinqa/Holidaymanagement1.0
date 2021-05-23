import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form } from 'react-bootstrap';

export class EditUserModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state={stat:[],poz:[],dep:[]};
    }
    componentDidMount(){
        fetch(process.env.REACT_APP_API+"StatusiPuntorit")
        .then(response => response.json())
        .then(data => {
            this.setState({stat:data})
        });
        fetch(process.env.REACT_APP_API+"Pozita")
        .then(response => response.json())
        .then(data =>{
            this.setState({poz:data})
        });
        fetch(process.env.REACT_APP_API+"Departamenti")
        .then(response => response.json())
        .then(data => {
            this.setState({dep:data})
        });
        
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Users', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: event.target.Id.value,
                Emri: event.target.Emri.value,
                Mbiemri: event.target.Mbiemri.value,
                Gjinia: event.target.Gjinia.value,
                NrPersonal: event.target.NrPersonal.value,
                Tel: event.target.Tel.value,
                Email: event.target.Email.value,
                Passwordi: event.target.Passwordi.value,
                Statusi: event.target.Statusi.value,
                Pozita: event.target.Pozita.value,
                Departamenti: event.target.Departamenti.value,
                PushimVjetor: event.target.PushimVjetor.value,
                Viti: event.target.Viti.value,
                Roli: event.target.Roli.value,
                profili: event.target.profili.value


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
                            Edit Department
        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Row>
                            <Col sm={6}>
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="Id">
                                        <Form.Label>Id</Form.Label>
                                        <Form.Control type="text" name="Id" required
                                            disabled
                                            defaultValue={this.props.id}
                                            placeholder="Id" />
                                    </Form.Group>

                                    <Form.Group controlId="Emri">
                                        <Form.Label>Emri</Form.Label>
                                        <Form.Control type="text" name="Emri" required
                                            defaultValue={this.props.em}
                                            placeholder="Emri" />
                                    </Form.Group>
                                    <Form.Group controlId="Mbiemri">
                                        <Form.Label>Mbiemri</Form.Label>
                                        <Form.Control type="text" name="Mbiemri" required
                                            defaultValue={this.props.mb}
                                            placeholder="Mbiermi" />
                                    </Form.Group>
                                    <Form.Group controlId="Gjinia">
                                        <Form.Label>Gjinia: </Form.Label>
                                        <Form.Control as="select" defaultValue={this.props.gj}>
                                            <option>M</option>
                                            <option>F</option>
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="NrPersonal">
                                        <Form.Label>NrPersonal</Form.Label>
                                        <Form.Control type="number" name="NrPersonal" required
                                            defaultValue={this.props.np}
                                            placeholder="Numri Personal" />
                                    </Form.Group>
                                    <Form.Group controlId="Tel">
                                        <Form.Label>Tel: </Form.Label>
                                        <Form.Control type="text" name="Tel" required
                                            defaultValue={this.props.tl}
                                            placeholder="Numri Personal" />
                                    </Form.Group>
                                    <Form.Group controlId="Email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" name="Email" required
                                            defaultValue={this.props.eml}
                                            placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group controlId="Passwordi">
                                        <Form.Label>Passwordi</Form.Label>
                                        <Form.Control type="password" name="Passwordi" required
                                            defaultValue={this.props.pw}
                                            placeholder="Passwordi" />
                                    </Form.Group>
                                    <Form.Group controlId="Statusi">
                                        <Form.Label>Statusi</Form.Label>
                                        <Form.Control as="select" defaultValue={this.props.st} >
                                            {this.state.stat.map(com =>
                                                <option key={com.Id}>{com.Statusi}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Pozita">
                                        <Form.Label>Pozita</Form.Label>
                                        <Form.Control as="select" defaultValue={this.props.pz} >
                                            {this.state.poz.map(com =>
                                                <option key={com.Id}>{com.Statusi}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="Departamenti">
                                        <Form.Label>Departamenti</Form.Label>
                                        <Form.Control as="select" defaultValue={this.props.poz} >
                                            {this.state.dep.map(com =>
                                                <option key={com.Id}>{com.Departamenti}</option>)}
                                        </Form.Control>
                                    </Form.Group>
                                    <Form.Group controlId="PushimVjetor">
                                        <Form.Label>PushimVjetor</Form.Label>
                                        <Form.Control type="number" name="PushimVjetor" required
                                            defaultValue={this.props.pv}
                                            placeholder="Pushim Vjetor" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Update Department
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