import React from 'react';
import Stats from '../StatusWindow/StatusWindow';
import SysLogs from '../SysLogs/Logs';
import VpnForm from '../VpnForm/VpnForm';
import VpnLogs from '../VpnLogs/Logs';
import FirewallForm from '../FirewallForm/FirewallForm';
import FWLogs from '../FirewallLogs/Logs';
import GoogleSignInCard from '../GoogleLogin/GoogleLogin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import axios from 'axios';


class FirestationRoutes extends React.Component {
    constructor(){
        super();

        this.state = {
            loginData : '',
            logoutData : '',
            ready: false,
            user: {}
        };
        // this.responseGoogle = this.responseGoogle.bind(this);
        // this.logout = this.logout.bind(this);
        // this.Login = this.Login.bind(this);
        // this.Logout = this.Logout.bind(this);
    };

    // responseGoogle = (response) => {
    //   const userInfo = response;
    //   console.log(response);
    //   console.log('USER-INFO',userInfo);
    //   this.setState({
    //       loginData: response,
    //       ready: true,
    //       // user : response
    //   });
    //   this.setState({
    //     user: this.state.loginData.profileObj
    //   });
    //   console.log(this.state.user);

    //   // axios.post('http://localhost:3001/home', this.state)
    //   // .then(res => {
    //   //   console.log(res);
    //   // }).catch(e => console.error(e));

    // };

    // logout = () => {
    //   this.setState({
    //     loginData : '',
    //     ready : false
    //   });
    //   console.log(this.state.ready);

    //   // axios.post('http://localhost:3001/home', this.state)
    //   // .then(res => {
    //   //   console.log(res);
    //   // }).catch(e => console.error(e));
    // };
    
    // componentDidMount(){
    //   this.responseGoogle();
    // };

    // Login(){
    //   if (!this.state.ready){
    //     return(
    //       <GoogleLogin
    //         clientId='933105496273-j3plqu9mnj4gcvng7arq45kmjvdi98iu.apps.googleusercontent.com'
    //         buttonText='Login'
    //         onSuccess={this.responseGoogle}
    //         onFailure={this.responseGoogle}
    //       />
    //     );  
    //   };
      
    //   return this.Logout();
      
    // };

    // Logout(){
    //   if (this.state.ready){
    //     return(
    //       <GoogleLogout
    //         buttonText="Logout"
    //         onLogoutSuccess={this.logout}
    //       />
    //     );
    //   };

    // }

    render(){
        // if (!this.state.ready) {
        //     return(
        //         <Router>
        //           <Route exact path='/' component={Login} />
        //         </Router>
        //     );
        // }

        return(
            <Router>
              <Switch>
                <Route exact path='/' component={GoogleSignInCard} />
                <Route exact path='/status' component={Stats} />
                <Route exact path='/status/logs' component={SysLogs} />
                <Route exact path='/vpn/form' component={VpnForm} />
                <Route exact path='/vpn/logs' component={VpnLogs} />
                <Route exact path='/firewall/form' component={FirewallForm} />
                <Route exact path='/firewall/logs' component={FWLogs} />
                {/* <Route path='*' component={} /> */}
              </Switch>
            </Router>
          );
    };
  };

export default FirestationRoutes;