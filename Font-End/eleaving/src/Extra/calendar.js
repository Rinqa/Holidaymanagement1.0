

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
    countDays(sDate) {
        

        var date1 = new Date(sDate);
        var date2 = new Date().toLocaleDateString();

        var time_difference = date2.getTime() - date1.getTime();

        var result = time_difference / (1000 * 60 * 60 * 24);
        console.log("res: " + result);
        return result;


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
                        
                        
                    
                    
                            
                    </Col>
                </Row>
            </div>


        )
    }
}