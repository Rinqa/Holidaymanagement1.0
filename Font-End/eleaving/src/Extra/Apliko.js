
import React from 'react'

import { Component } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap';
import { Navigation } from '../Navigation'

export class Apliko extends Component {
    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = { push: [] };
    }
    componentDidMount() {
        fetch(process.env.REACT_APP_API + "Pushimet")
            .then(response => response.json())
            .then(data => {
                this.setState({ push: data })
            });
    }
    handleSubmit(event) {
        event.preventDefault();
        fetch(process.env.REACT_APP_API + 'Aplikimet', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                IdUser: "1",
                Pushimi: event.target.Pushimi.value,
                DataFillimit: event.target.DataFillimit.value,
                DataMbarimit: event.target.DataMbarimit.value,
                Pershkrimi: event.target.Pershkrimi.value,
                Aprovimi : "False",
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
        const { push } = this.setState;
        return (
            <div >
                <Navigation />
                <div className="center">


                    <Form onSubmit={this.handleSubmit}>
                        <Row><Col sm={6} >
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
                        </Col>
                            <Col sm={6}>
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
                                        placeholder="Arsyja" />
                                </Form.Group>
                            </Col></Row>
                        <Form.Group>
                            <Button variant="primary" type="submit">
                                Update Application
                        </Button>
                        </Form.Group>
                    </Form>
                </div>

            </div>


        )
    }
}
export default Apliko