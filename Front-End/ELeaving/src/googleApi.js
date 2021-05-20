import React, { Component } from 'react'
import GoogleLogin from 'react-google-login'
export class googleApi extends Component {
    responseGoogle=(response)=>{
        console.log(response);
        console.log(response.profileObj);
        
        
      }
      render() {
        return (
          <div>
            <GoogleLogin
            clientId="244420790149-7gb05ofovof3m7i7052nfaam491s87kf.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy={'single_host_origin'}
            
            />
          </div>
        )
      }
    }
    
    export default googleApi