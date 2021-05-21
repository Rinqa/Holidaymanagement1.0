import { CardHeader, Container } from '@material-ui/core';
import React from 'react'


import { Component } from 'react'
import { Table, Card, Col, Row } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';


export class Kompania extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'Kompania')
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
        const { dep } = this.state;

        return (
            <div >
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Emri</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {dep.map(us =>
                            <tr key={us.Id}>
                            <td>{us.Id}</td>
                            <td>{us.Emri}</td>
                            
                            </tr>
                        )}
                    </tbody>
                </Table>
            </div>


        )
    }
}
export default Departamenti