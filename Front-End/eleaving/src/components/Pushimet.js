import { CardHeader, Container } from '@material-ui/core';
import React from 'react'


import { Component } from 'react'
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddPushimiModal} from './Add/AddPushimiModal';
import {EditPushimiModal} from './Edit/EditPushimiModal';

export class Pushimet extends Component {
    constructor(props) {
        super(props)
        this.state = { pushimet: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Pushimet')
            .then(response => response.json())
            .then(data => {
                this.setState({ pushimet: data });
            })
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deletePushimi(pushId) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Pushimet/' + pushId, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { pushimet,idp,push,kat } = this.state;
        let addModalClose=() => this.setState({addModalShow:false});
        let editModalClose=()=>this.setState({editModalShow:false});
        return (
            <div >
                <div className="right">
                    <ButtonToolbar className="justify-content-right">
                        <Button variant='primary'
                            onClick={() => this.setState({ addModalShow: true })}>
                            Add Pushimi</Button>

                        <AddPushimiModal show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pushimi</th>
                            <th>Kategoria</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pushimet.map(us =>
                            <tr key={us.Id}>
                            <td>{us.Id}</td>
                            <td>{us.Pushimi}</td>
                            <td>{us.Kategoria}</td>
                            <td>
                            <Button className="mr-2" variant="primary"
                                        onClick={() => this.setState({
                                            editModalShow: true,
                                            idp: us.Id, push: us.Pushimi,kat:us.Kategoria
                                        })}>
                                        <i className="fa fa-pencil"></i>
                                    </Button>
                                    <Button className="mr-2" variant="danger"
                                        onClick={() => this.deletePushimi(us.Id)}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                    <EditPushimiModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        idp={idp}
                                        push={push}
                                        kat={kat}
                                       />
                            </td>
                            </tr>
                            
                        )}
                    </tbody>
                </Table>
            </div>


        )
    }
}
export default Pushimet
