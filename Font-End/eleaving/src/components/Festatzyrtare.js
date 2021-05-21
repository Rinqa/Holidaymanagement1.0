
import React from 'react'


import { Component } from 'react'
import { Table, } from 'react-bootstrap';
import { Button  } from 'react-bootstrap';


export class Pushimet extends Component {
    constructor(props) {
        super(props)
        this.state = { pushimet: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'FestaZyrtare')
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

    render() {
        const { pushimet } = this.state;

        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Festa</th>
                            <th>Dita</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pushimet.map(us =>
                            <tr key={us.Id}>
                            <td>{us.Id}</td>
                            <td>{us.Festa}</td>
                            <td>{us.Dita}</td>
                            <td>
                                <Button className="btn"><i className="fa fa-pencil"></i></Button>
                                <Button className="btn-danger"><i className="fa fa-trash"></i></Button>
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