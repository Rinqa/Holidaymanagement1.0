import { Container } from '@material-ui/core';
import React from 'react'


import { Component } from 'react'
import { Card, Row, Button } from 'react-bootstrap';


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
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Container>
                    <Row>

                        {user.map(us =>

                            <Card key={us.Id} style={{ width: '18rem' }} className="us">
                                <Card.Img variant="top" src="https://thispersondoesnotexist.com/image" />
                                <Card.Body>
                                    <Card.Title>{us.Emri} {us.Mbiemri}</Card.Title>
                                    <Card.Text><i className="fa fa-mail-forward"></i>{us.Email}  </Card.Text>
                                    <Card.Text>Departamenti: {us.Departamenti}</Card.Text>
                                    <Card.Text><i className="fa fa-phone"></i> {us.Tel}</Card.Text>
                                    <Card.Footer><Button className="btn btn-block" onClick={() => this.setState({
                                        editModalShow: true,
                                        idep: us.Id, depsn: us.Departamenti
                                    })}>Edit/Show</Button></Card.Footer>
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
