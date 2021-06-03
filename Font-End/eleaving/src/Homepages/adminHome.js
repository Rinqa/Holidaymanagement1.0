import React from 'react';
import { Component } from 'react';
import { Row, Col, Card } from 'react-bootstrap'
export class homeAdmin extends Component {

    render() {
        return (
            <div className="">
            <div className="homee">

                <Col>
                    <Row>
                    <Card>
                            <Card.Title className="title">
                                <h1><i className="fa fa-plus"></i></h1>
                            </Card.Title>
                            <Card.Footer>
                            <a href="/unapproved" id="u"><h3>Aplikimet</h3></a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Title className="title">
                                <h1><i className="fa fa-users"></i></h1>
                            </Card.Title>
                            <Card.Footer>
                            <a href="/profili" id="u"><h3>Profili</h3></a>
                            </Card.Footer>
                        </Card>

                   
                    <Card >
                            <Card.Title className="title">
                                <h1><i className="fa fa-suitcase"></i></h1>
                            </Card.Title>
                            <Card.Footer>
                            <a href="/pushimet"  id="u"><h3>Pushimet</h3></a>
                            </Card.Footer>
                        </Card>
                        <Card >
                            <Card.Title className="title">
                                <h1><i className="fa fa-suitcase"></i></h1>
                            </Card.Title>
                            <Card.Footer>
                            <a href="/calendar"  id="u"><h3>Festat Zyrtare</h3></a>
                            </Card.Footer>
                        </Card>
                        <Card>
                            
                            <Card.Title className="title">
                                <h1><i className="fa fa-home"></i></h1>
                            </Card.Title>
                            <Card.Footer>
                                <a href="/" id="u"><h3>Home Page</h3></a>
                            </Card.Footer>
                            
                        </Card>

                    </Row>
                </Col>
                </div>
            </div>
        )
    }
}
export default homeAdmin