
import React from 'react'


import { Component } from 'react'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab';
import { Col, Form, Row, Container ,Button} from 'react-bootstrap';
import {EditUserModal} from './Edit/EditUserModal'
export class usersi extends Component {

    constructor(props) {
        super(props)
        this.state = { user: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'usersi/1')
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
        const { user,id,uz,em,mb,gj,np,tl,eml,ps,st,pz,dp,pv,vt,rl,pr } = this.state;
        let editModalClose = () => this.setState({ editModalShow: false });
        
        return (
            <div >
                <Tabs defaultActiveKey="Main" id="uncontrolled-tab-example">
                    <Tab eventKey="Main" title="Main">
                        <div className="prof">
                            <Container>
                                {user.map(us => 

                                <Row>

                                    <Col sm={6}>
                                        <Form.Group controlId="Emri">
                                            <Form.Label>Emri</Form.Label>
                                            <Form.Control type="text" name="Emri" required
                                                defaultValue={us.Emri}
                                                placeholder="Emri" disabled="True" />
                                        </Form.Group>
                                        
                                        <Form.Group controlId="NrPersonal">
                                            <Form.Label>Numri Personal</Form.Label>
                                            <Form.Control type="text" name="NrPersonal" required
                                                defaultValue={us.NrPersonal}
                                                placeholder="nrPersonal" disabled="True" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="Mbiemri">
                                            <Form.Label>Mbiemri</Form.Label>
                                            <Form.Control type="text" name="Mbiemri" required
                                                defaultValue={us.Mbiemri}
                                                placeholder="Mbiermi" disabled="True" />
                                        </Form.Group>
                                        <Form.Group controlId="Gjinia">
                                            <Form.Label>Gjinia: </Form.Label>
                                            <Form.Control type="text" name="Tel"  defaultValue={us.Gjinia} placeholder="Gjinia" disabled="True">
                                            </Form.Control>
                                        </Form.Group>
                                        
                                    </Col>

                                </Row>
                            )}
                            </Container>
                        </div>
                    </Tab>
                    <Tab eventKey="Info" title="Info">
                    <div className="prof">
                            <Container>
                                {user.map(us => 

                                <Row>

                                    <Col sm={6}>
                                        <Form.Group controlId="Statusi">
                                            <Form.Label>Statusi</Form.Label>
                                            <Form.Control type="text" name="Statusi" required
                                                defaultValue={us.Statusi}
                                                placeholder="Emri" disabled="True" />
                                        </Form.Group>
                                        <Form.Group controlId="Pozita">
                                            <Form.Label>Pozita</Form.Label>
                                            <Form.Control type="text" name="Pozita" required
                                                defaultValue={us.Pozita}
                                                placeholder="Username" disabled="True" />
                                        </Form.Group>
                                        <Form.Group controlId="Viti">
                                            <Form.Label>Kyçur Me</Form.Label>
                                            <Form.Control type="text" name="Pozita" required
                                                defaultValue={us.Viti}
                                                placeholder="Username" disabled="True" />
                                        </Form.Group>
                                        
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="Departamenti">
                                            <Form.Label>Departamenti</Form.Label>
                                            <Form.Control type="text" name="Depratamenti" required
                                                defaultValue={us.Departamenti}
                                                placeholder="Mbiermi" disabled="True" />
                                        </Form.Group>
                                        <Form.Group controlId="Roli">
                                            <Form.Label>Roli</Form.Label>
                                            <Form.Control type="text" name="Roli" required
                                                defaultValue={us.Roli}
                                                placeholder="Mbiermi" disabled="True" />
                                        </Form.Group>
                                        
                                    </Col>

                                </Row>
                            )}
                            </Container>
                        </div>

                    </Tab>
                    <Tab eventKey="contact" title="Contact" >
                    <div className="prof">
                            <Container>
                                {user.map(us => 

                                <Row>

                                    <Col sm={6}>
                                    <Form.Group controlId="Tel">
                                            <Form.Label>Tel</Form.Label>
                                            <Form.Control type="text" name="username" required
                                                defaultValue={us.Tel}
                                                placeholder="Tel" disabled="True" />
                                        </Form.Group>
                                    <Form.Group controlId="Pushim Vjetor">
                                            <Form.Label>Pushim Vjetor</Form.Label>
                                            <Form.Control type="text" name="Pushim Vjetor" required
                                                defaultValue={us.PushimVjetor}
                                                placeholder="Pushim Vjetor" disabled="True" />
                                        </Form.Group>
                                        
                                        
                                    </Col>
                                    <Col sm={6}>
                                        <Form.Group controlId="Email">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control type="text" name="Email" required
                                                defaultValue={us.Email}
                                                placeholder="Email" disabled="True" />
                                        </Form.Group>
                                        <Form.Group controlId="Edit">
                                            <br/>
                                            <Button className="btn-block" onClick={() => this.setState({
                                        editModalShow: true,
                                        id:us.Id,
                                        uz:us.username,
                                        em:us.Emri,
                                        mb:us.Mbiemri,
                                        gj:us.Gjinia,
                                        np:us.NrPersonal,
                                        tl:us.Tel,
                                        eml:us.Email,
                                        st:us.Statusi,
                                        pz:us.Pozita,
                                        dp:us.Departamenti,
                                        pv:us.PushimVjetor,
                                        vt:us.Viti,
                                        rl:us.Roli,
                                        pr:us.Profili
                                    })}>Edit</Button>
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
                                        st={st}
                                        pz={pz}
                                        dp={dp}
                                        pv={pv}
                                        vt={vt}
                                        rl={rl}
                                        pr={pr}

                                    />
                                        </Form.Group>
                                    </Col>

                                </Row>
                            )}
                            </Container>
                        </div>

                    </Tab>
                </Tabs>
            </div>


        )
    }
}
export default usersi
