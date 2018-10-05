import React, { Component } from 'react';
import './stylesheets/App.css';
import NavFire from './components/Navigation/Nav';
import Stats from './components/StatusWindow/StatusWindow';
import SysLogs from './components/SysLogs/Logs';
import VpnForm from './components/VpnForm/VpnForm';
import VpnLogs from './components/VpnLogs/Logs';
import FirewallForm from './components/FirewallForm/FirewallForm';
import FWLogs from './components/FirewallLogs/Logs';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const FirestationRoutes = () => {
  return(
    <Router>
      <div>
        <Route exact path='/' component={SysLogs} />
        <Route path='/status' component={Stats} />
        <Route path='/status/logs' component={SysLogs} />
        <Route path='/vpn/form' component={VpnForm} />
        <Route path='/vpn/logs' component={VpnLogs} />
        <Route path='/firewall/form' component={FirewallForm} />
        <Route path='/firewall/logs' component={FWLogs} />
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
