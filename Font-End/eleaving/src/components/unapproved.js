
import React from 'react'

import { Component } from 'react'
import { Table} from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAplModal } from './Add/AddAplModal';
import { EditAplModal } from './Edit/EditAplModal';

export class unapproved extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'unapprovedApli')
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
    
    render() {
        const { dep,id, idU, pu,df,dm,pr,apro} = this.state;
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
                            <th>IdUser</th>
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
                                <td>{us.IdUser}</td>
                                <td>{us.Pushimi}</td>
                                <td>{us.DataFillimit}</td>
                                <td>{us.DataMbarimit}</td>
                                <td>{us.Pershkrimi}</td>

                                <td>
                                    <Button className="mr-2" variant="primary"
                                        onClick={() => this.setState({
                                            editModalShow: true,
                                            id:us.Id,idU: us.IdUser, pu: us.Pushimi,df:us.DataFillimit,dm:us.DataMbarimit,pr:us.Pershkrimi,apro:us.Aprovimi
                                        })}>
                                        <i className="fa fa-pencil"></i>
                                    </Button>
                                    
                                    <EditAplModal show={this.state.editModalShow}
                                        onHide={editModalClose}
                                        id={id}
                                        idU={idU}
                                        pu={pu}
                                        df={df}
                                        dm={dm}
                                        pr={pr}
                                        apro={apro }
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
export default unapproved