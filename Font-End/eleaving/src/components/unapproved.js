
import React from 'react'

import { Component } from 'react'
import { Table } from 'react-bootstrap';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { AddAplModal } from './Add/AddAplModal';

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
    countDays(sDate, eDate) {


        var date1 = new Date(sDate);
        var date2 = new Date(eDate);

        var time_difference = date2.getTime() - date1.getTime();

        var result = time_difference / (1000 * 60 * 60 * 24);
        console.log("res: " + result);
        return result;


    }
    checkPushimi(pu,idU,df,dm){
        if(pu==='Vjetor'){
            fetch(process.env.REACT_APP_API + 'PushimVjetor', {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    Id: idU,
                    PushimiVjetor:this.countDays(df,dm)
                })
            })
               
        }
    }
    getDate() {
        var today = new Date().toLocaleDateString();
        return today;
    }
    
approvo(id, idU, pu, df, dm, pr) {
    if (window.confirm('Are you sure?')) {

        fetch(process.env.REACT_APP_API + 'Aplikimet', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: id,
                IdUser: idU,
                Pushimi: pu,
                DataFillimit: df,
                DataMbarimit: dm,
                Pershkrimi: pr,
                Aprovimi: "Approved",
            })
        })
            .then(res => res.json())
            .then((result) => {
                this.checkPushimi(pu, idU, df, dm)
                
            }
            )

        fetch(process.env.REACT_APP_API + 'PushimetMarrura', {
            method: 'Post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({


                Users: idU,
                Pushimi: pu,
                Ditet: this.countDays(df, dm),
                Viti: this.getDate(),


            })
        })
            
    }
}
decline(id, idU, pu, df, dm, pr) {
    if (window.confirm('Are you sure?')) {

        fetch(process.env.REACT_APP_API + 'Aplikimet', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Id: id,
                IdUser: idU,
                Pushimi: pu,
                DataFillimit: df,
                DataMbarimit: dm,
                Pershkrimi: pr,
                Aprovimi: "Declined",
            })
        })
            .then(res => res.json())
            .then((result) => {
                alert(result);
            },
                (error) => {
                    alert('Failed');
                })
    }
}
render() {
    const { dep } = this.state;
    let addModalClose = () => this.setState({ addModalShow: false });
    return (
        <div >
            <div className="right">
                <ButtonToolbar className="justify-content-right">
                    <Button variant='primary'
                        onClick={() => this.setState({ addModalShow: true })}>
                        Add Application</Button>

                    <AddAplModal show={this.state.addModalShow}
                        onHide={addModalClose} />
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
                                    onClick={() => this.approvo(us.Id, us.IdUser, us.Pushimi, us.DataFillimit, us.DataMbarimit, us.Pershkrimi)}>
                                    Approvo
                                </Button>
                                <Button className="mr-2" variant="danger"
                                    onClick={() => this.decline(us.Id, us.IdUser, us.Pushimi, us.DataFillimit, us.DataMbarimit, us.Pershkrimi)}>
                                    Decline
                                </Button>
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