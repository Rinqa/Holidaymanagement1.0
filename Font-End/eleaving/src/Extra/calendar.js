
import Calendar from 'react-calendar';
import { Component } from 'react';
import 'react-calendar/dist/Calendar.css';
import { Col,Row, Table } from 'react-bootstrap'
export class calendar extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'FZyrtare')
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
            <div>
                <Row>
                    <Col sm={6}>
                        <Table className="mt-4" striped bordered hover size="sm">
                            <thead>
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