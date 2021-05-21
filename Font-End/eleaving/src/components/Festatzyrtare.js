import { CardHeader, Container } from '@material-ui/core';
import React from 'react'

import { Component } from 'react'
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddFesModal } from './Add/AddFesModal';
import { EditFesModal } from './Edit/EditFesModal';

export class FestaZyrtare extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'FestaZyrtare')
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
            fetch(process.env.REACT_APP_API + 'FestaZyrtare/' + depid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { dep, Fe,Di,id } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <div className="right">
                    <ButtonToolbar className="justify-content-right">
                        <Button variant='primary'
                            onClick={() => this.setState({ addModalShow: true })}>
                            Add Festa</Button>

                        <AddFesModal show={this.state.addModalShow}
                            onHide={addModalClose} /> 

                    </ButtonToolbar>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Festa</th>
                            <th>Dita</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dep.map(us =>
                            <tr key={us.Id}>
                                <td>{us.Id}</td>
                                <td>{us.Festa}</td>
                                <td>{us.Dita}</td>
                                <td>
                                    <Button className="mr-2" variant="primary"
                                        onClick={() => this.setState({
                                            editModalShow: true,
                                            id: us.Id, Fe: us.Festa, Di: us.Dita
                                        })}>
                                        <i className="fa fa-pencil"></i>
                                    </Button>
                                    <Button className="mr-2" variant="danger"
                                        onClick={() => this.deleteDep(us.Id)}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                    <EditFesModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        id={id}
                                        Fe={Fe}
                                        Di={Di}
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
export default FestaZyrtare