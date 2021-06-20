
// import Calendar from 'react-calendar';
import { Component } from 'react';
// import 'react-calendar/dist/Calendar.css';//
import { Col, Row, Table } from 'react-bootstrap'
import {Navigation} from '../Navigation'
import { Doughnut } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";
export class GetPushimet extends Component {
    
    state = {
        dataDoughnut: {
          labels: ["Pushim Vjetor", "Pushim i Shfrytezuar", "Mjeksor", "Special"],
          datasets: [
            {
              data: [20,10,2,1],
              backgroundColor: ["#F7464A", "#46BFBD","#FDB45C", "#949FB1"],
              hoverBackgroundColor: [
                "#FF5A5E",
                "#5AD3D1",
                "#FFC870",
                "#A8B3C5",
              ]
            }
          ]
        }
      }
      
      render() {
          return (
              <div>
              <Navigation/>
              
          <MDBContainer>
            <h3 className="mt-5">Pushimet e Mija</h3>
            <Doughnut data={this.state.dataDoughnut} options={{ responsive: true }} />
          </MDBContainer>
          </div>
          );
        }
      }