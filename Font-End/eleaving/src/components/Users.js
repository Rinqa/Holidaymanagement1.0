import { Container } from '@material-ui/core';
import React from 'react'


import { Component } from 'react'
import { Card, Row, Button } from 'react-bootstrap';
import {EditUserModal} from './Edit/EditUserModal'

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
        const { user, id,uz,em,mb,gj,np,tl,eml,ps,st,pz,dp,pv,vt,rl,pr } = this.state;
        console.log(user);
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <Container>
                    <Row>

                        {user.map(us =>

                            <Card key={us.Id} style={{ width: '18rem' }} className="us">
                                <Card.Img variant="top" width="400px" height="200px" src={process.env.REACT_APP_PHOTOPATH+us.profili} />
                                <Card.Body>
                                    <Card.Title>{us.Emri} {us.Mbiemri}</Card.Title>
                                    <Card.Text><i className="fa fa-mail-forward"></i>{us.Email}  </Card.Text>
                                    <Card.Text>Departamenti: {us.Departamenti}</Card.Text>
                                    <Card.Text>Satusi: {us.Statusi}</Card.Text>
                                    <Card.Text><i className="fa fa-phone"></i> {us.Tel}</Card.Text>
                                    <Card.Footer><Button className="btn btn-block" onClick={() => this.setState({
                                        editModalShow: true,
                                        id:us.Id,
                                        uz:us.username,
                                        em:us.Emri,
                                        mb:us.Mbiemri,
                                        gj:us.Gjinia,
                                        np:us.NrPersonal,
                                        tl:us.Tel,
                                        eml:us.Email,
                                        ps:us.Passwordi,
                                        st:us.Statusi,
                                        pz:us.Pozita,
                                        dp:us.Departamenti,
                                        pv:us.PushumVjetor,
                                        vt:us.Viti,
                                        rl:us.Roli,
                                        pr:us.Profili
                                    })}>Edit/Show</Button>
                                    
                                    <EditUserModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        id={id}
                                        uz={uz}
                                        em={em}
                                        mb={mb}
                                        gj={gj}
                                        np={np}
                                        tl={tl}
                                        eml={eml}
                                        ps={ps}
                                        st={st}
                                        pz={pz}
                                        dp={dp}
                                        pv={pv}
                                        vt={vt}
                                        rl={rl}
                                        pr={pr}

                                    />
                                        
                                    
                                    </Card.Footer>
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
