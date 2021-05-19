import { CardHeader, Container } from '@material-ui/core';
import React from 'react'


import { Component } from 'react'
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';


export class Users extends Component {
    constructor(props) {
        super(props)
        this.state = { user: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Users')
            .then(response => response.json())
            .then(data => {
                this.setState({ user: data });
            })
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { user } = this.state;
        console.log(user);
        return (
            <div >
                <Container>
                    <Row>
                             
                        {user.map(us =>
                            <Card key={us.Id } style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="https://thispersondoesnotexist.com/image"/>
                                <Card.Body>
                                <Card.Title>{us.Emri} {us.Mbiemri}</Card.Title>
                                <Card.Text><a href="#"><i className="fa fa-mail-forward"></i></a>{us.Email}  </Card.Text>
                                <Card.Text><i className="fa fa-phone"></i> {us.Tel}</Card.Text>
                                </Card.Body>
                            </Card>
                        )}
                    </Row>
                </Container>
                </div>


        )
    }
}
export default Users
