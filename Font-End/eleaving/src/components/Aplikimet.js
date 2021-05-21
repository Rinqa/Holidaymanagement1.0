import { CardHeader, Container } from '@material-ui/core';
import React from 'react'

import { Component } from 'react'
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAplModal } from './Add/AddAplModal';
import { EditAplModal } from './Edit/EditAplModal';

export class Aplikimet extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Aplikimet')
            .then(response => response.json())
            .then(data => {
                this.setState({ dep: data });
            })
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    deleteDep(depid) {
        if (window.confirm('Are you sure?')) {
            fetch(process.env.REACT_APP_API + 'Aplikimet/' + depid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { dep,id, idU, pu,df,dm,pr} = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <div className="right">
                    <ButtonToolbar className="justify-content-right">
                        <Button variant='primary'
                            onClick={() => this.setState({ addModalShow: true })}>
                            Add Application</Button>

                         <AddAplModal show={this.state.addModalShow}
                             onHide={addModalClose}/> 
                    </ButtonToolbar>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Users</th>
                            <th>Pushimi</th>
                            <th>DataFillimit</th>
                            <th>DataMbarimit</th>
                            <th>Pershkrimi</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dep.map(us =>
                            <tr key={us.Id}>
                                <td>{us.Id}</td>
                                <td>{us.Users}</td>
                                <td>{us.Pushimi}</td>
                                <td>{us.DataFillimit}</td>
                                <td>{us.DataMbarimit}</td>
                                <td>{us.Pershkrimi}</td>

                                <td>
                                    <Button className="mr-2" variant="primary"
                                        onClick={() => this.setState({
                                            editModalShow: true,
                                            id:us.Id,idU: us.Users, pu: us.Pushimi,df:us.DataFillimit,dm:us.DataMbarimit,pr:us.Pershkrimi
                                        })}>
                                        <i className="fa fa-pencil"></i>
                                    </Button>
                                    <Button className="mr-2" variant="danger"
                                        onClick={() => this.deleteDep(us.Id)}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                    <EditAplModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        id={id}
                                        idU={idU}
                                        pu={pu}
                                        df={df}
                                        dm={dm}
                                        pr={pr}
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
export default Aplikimet