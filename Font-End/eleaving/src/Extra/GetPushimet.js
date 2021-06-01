
// import Calendar from 'react-calendar';
import { Component } from 'react';
// import 'react-calendar/dist/Calendar.css';//
import { Col, Row, Table } from 'react-bootstrap'
import {Navigation} from '../Navigation'
export class GetPushimet extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'GetPushimet/1')
            .then(response => response.json())
            .then(data => {
                this.setState({ dep: data });
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
                                    <th>Pushimi</th>
                                    <th>Ditet</th>
                                    <th>Viti</th>

                                </tr>
                            </thead>
                            <tbody>
                                {dep.map(us =>
                                    <tr key={us.Id}>
                                        <td>{us.Pushimi}</td>
                                        <td>{us.Ditet}</td>
                                        <td>{us.Viti}</td>
                                    </tr>
                                )}
                            </tbody>
                            
                        </Table>
                    </Col>
                   
                </Row>
            </div>


        )
    }
}