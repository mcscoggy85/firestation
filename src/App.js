import React, { Component } from 'react';
import './stylesheets/App.css';
import NavFire from './components/Navigation/Nav.js';
import Stats from './components/StatusWindow/StatusWindow.js';
import VpnForm from './components/VpnForm/VpnForm.js';
import FirewallForm from './components/FirewallForm/FirewallForm';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const FirestationRoutes = () => {
  return(
    <Router>
      <div>
        <Route exact path='/' component={Stats} />
        <Route path='/status' component={Stats} />
        <Route path='/vpn/form' component={VpnForm} />
        {/* <Route path='/vpn/logs' component={VpnForm} /> */}
        <Route path='/firewall/form' component={FirewallForm} />
        {/* <Route path='/firewall/logs' component={VpnForm} /> */}
      </div>
    </Router>
  );
  
};



class App extends Component {
  render() {
    return (
      <div>
        <NavFire/>  
        <FirestationRoutes/>
      </div>
    );
  }
}

export default App;
