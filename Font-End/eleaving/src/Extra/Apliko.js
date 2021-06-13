
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
    countDays(sDate, eDate) {


        var date1 = new Date(sDate);
        var date2 = new Date(eDate);

        var time_difference = date2.getTime() - date1.getTime();

        var result = time_difference / (1000 * 60 * 60 * 24);
        console.log("res: " + result);
        return result;


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
                Aprovimi: "Pending",
            })
        })
            .then(res => res.json())
            .then((result) => {
                console.log(event.target.DataFillimit.value - event.target.DataMbarimit.value)
                alert(result);
            },
                (error) => {
                    var startDate = event.target.DataFillimit.value;
                    var endDate = event.target.DataMbarimit.value;
                    console.log(this.countDays(startDate, endDate));

                    alert('Failed');
                })
    }
    render() {
        
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
                            <Form.Group controlId="Pershkrimi">
                                <Form.Label>Pershkrimi</Form.Label>
                                <Form.Control type="text" name="Pershkrimi"
                                    placeholder="Arsyja" />
                            </Form.Group>

                        </Col>
                            <Col sm={6}>
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