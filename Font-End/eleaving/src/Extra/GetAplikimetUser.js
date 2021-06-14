import { Component } from 'react';
import { Col, Row, Table } from 'react-bootstrap'
export class GetAplikimetUser extends Component {
    constructor(props) {
        super(props)
        this.state = { dep: [] }
    }
    refreshList() {
        fetch(process.env.REACT_APP_API + 'AplikimetUser/1')
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
    countDays(sDate, eDate) {


        var date1 = new Date(sDate);
        var date2 = new Date(eDate);

        var time_difference = date2.getTime() - date1.getTime();

        var result = time_difference / (1000 * 60 * 60 * 24);
        console.log("res: " + result);
        return result;


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
                                    <th>Pushimi</th>
                                    <th>DataFillimit</th>
                                    <th>DataMbarimit</th>
                                    <th>Vendimi</th>
                                    <th>Pershkrimi</th>


                                </tr>
                            </thead>
                            <tbody>
                                {dep.map(us =>
                                    <tr key={us.Id}>
                                        <td>{us.Pushimi}</td>
                                        <td>{us.DataFillimit}</td>
                                        <td>{us.DataMbarimit}</td>
                                        
                                        <td>{us.Aprovimi}</td>
                                        <td>{us.Pershkrimi}</td>

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