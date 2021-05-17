

import {
  CRow,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { DocsLink } from 'src/reusable'




const Colors = () => {
  return (
    <>
      <CCard>
        <CCardHeader>
          <h4>Employee</h4>
          <DocsLink href="https://coreui.io/docs/utilities/colors/"/>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            <CCard className="prof">
              <img alt="test" src='https://thispersondoesnotexist.com/image' width='300' height="300"></img>
              <h5>Emri: ASD</h5>
              <h5>Email: ASD@gmail.com</h5>
            </CCard>
            
          </CRow>
        </CCardBody>
      </CCard>
      <CCard>
        
      </CCard>
    </>
  )
}

export default Colors
