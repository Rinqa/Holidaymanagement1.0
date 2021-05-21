
import React from 'react'

import { Component } from 'react'
import { Table} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import {AddPozModal} from './Add/AddPozModal'
import {EditPozModal} from './Edit/EditPozModal'
export class Pozitat extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Pozita')
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
            fetch(process.env.REACT_APP_API + 'Pozita/' + depid, {
                method: 'DELETE',
                header: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }
    }
    render() {
        const { dep, id,poz  } = this.state;
        let addModalClose = () => this.setState({ addModalShow: false });
        let editModalClose = () => this.setState({ editModalShow: false });
        return (
            <div >
                <div className="right">
                    <ButtonToolbar className="justify-content-right">
                        <Button variant='primary'
                            onClick={() => this.setState({ addModalShow: true })}>
                            Add Pozita</Button>

                        <AddPozModal show={this.state.addModalShow}
                            onHide={addModalClose} />
                    </ButtonToolbar>
                </div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Pozita</th>
                            
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dep.map(us =>
                            <tr key={us.Id}>
                                <td>{us.Id}</td>
                                <td>{us.Pozita}</td>
                                
                                <td>
                                    <Button className="mr-2" variant="primary"
                                        onClick={() => this.setState({
                                            editModalShow: true,
                                            id: us.Id, poz: us.Pozita
                                        })}>
                                        <i className="fa fa-pencil"></i>
                                    </Button>
                                    <Button className="mr-2" variant="danger"
                                        onClick={() => this.deleteDep(us.Id)}>
                                        <i className="fa fa-trash"></i>
                                    </Button>
                                    <EditPozModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        id={id}
                                        poz={poz}
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
export default Pozitat