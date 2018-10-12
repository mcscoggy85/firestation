import React from 'react';
import Stats from '../StatusWindow/StatusWindow';
import SysLogs from '../SysLogs/Logs';
import VpnForm from '../VpnForm/VpnForm';
import VpnLogs from '../VpnLogs/Logs';
import FirewallForm from '../FirewallForm/FirewallForm';
import FWLogs from '../FirewallLogs/Logs';
import GoogleSignInCard from '../GoogleLogin/GoogleLogin';
import GoogleSignOutCard from '../GoogleLogout/GoogleSignOutCard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios';
import { Alert } from 'reactstrap';


class FirestationRoutes extends React.Component {
    constructor(){
        super();
        this.state = {
            ready: false
        };
    };

    getLSTokenAndVerify = () => { 
      const token = localStorage.getItem('token');
      if (token !== null){
        axios.post('http://localhost:3001/show-routes',token, {
          headers: {'Authorization': `Bearer ${token}`}
        }).then(res => {
          if (
            (res.data.message === 'Token is valid')
            &&
            (res.data.authData.exp > Date.now() / 1000)
            ){
              // console.log('POOP')
              this.setState({ready: true})
          }
        }).catch(console.error);
      } else {
        console.log('Token has expired, please logout...')
        this.setState({ready: false});
        return(<Alert>Session Expired</Alert>)
      }
      
    };

    componentDidMount(){
      // this.timer = setInterval(this.getLSTokenAndVerify, 3000);
      this.getLSTokenAndVerify();
    }

    componentWillUnmount(){
      // this.timer;
    }

    render(){     

      if (!this.state.ready){
        console.log(this.state.ready);
        return(
          <Switch>
            {/* <Redirect from='/' to='/sign-in'/> */}
            <Route exact path='/' component={GoogleSignInCard} />                  
          </Switch>
        );
      }
      return(
        <Router>
          <Switch>
            <Route exact path='/' component={GoogleSignOutCard} />
            <Route exact path='/status' component={Stats} />
            <Route exact path='/status/logs' component={SysLogs} />
            <Route exact path='/vpn/form' component={VpnForm} />
            <Route exact path='/vpn/logs' component={VpnLogs} />
            <Route exact path='/firewall/form' component={FirewallForm} />
            <Route exact path='/firewall/logs' component={FWLogs} />
          </Switch>
        </Router>
      );
    
    };
  };

export default FirestationRoutes;