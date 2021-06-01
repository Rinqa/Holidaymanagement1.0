
import Calendar from 'react-calendar';
import { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Col, Row, Table } from 'react-bootstrap'
import {Navigation} from '../Navigation'
export class calendar extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [], fz: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'FZyrtare')
            .then(response => response.json())
            .then(data => {
                this.setState({ dep: data });
            });
        fetch(process.env.REACT_APP_API + 'FestaZyrtare')
            .then(response => response.json())
            .then(data => {
                this.setState({ fz: data })
            });
    }
    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }
    render() {
        const { dep, fz } = this.state;
        return (
            <div>
            <Navigation/>
                <Row>
                    <Col sm={6}>
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>

                                <tr>
                                    <th colSpan="3">Upcomming</th>
                                </tr>
                                <tr>
                                    <th>ID</th>
                                    <th>Festa</th>
                                    <th>Dita</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dep.map(us =>
                                    <tr key={us.Id}>
                                        <td>{us.Id}</td>
                                        <td>{us.Festa}</td>
                                        <td>{us.Dita}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col sm={6}>
                        
                        <Row>
                            <Table className="mt-4" striped bordered hover size="sm">
                                <thead>
                                    <tr>
                                        <th>Festa</th>
                                        <th>Data</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fz.map(f =>
                                        <tr>
                                            <td>{f.Festa}</td>
                                            <td>{f.Dita}</td>
                                        </tr>)}
                                </tbody>
                            </Table>
                        </Row>
                        
                        
                    
                    <Row>
                            <p>Kalendari
                            </p>
                        </Row>
                        <Row><Calendar /></Row>
                    </Col>
                </Row>
            </div>


        )
    }
}