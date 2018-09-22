import React, { Component } from 'react';
import './stylesheets/App.css';
import NavFire from './components/Navigation/Nav.js';
import Stats from './components/StatusWindow/StatusWindow.js'
import VpnForm from './components/VpnForm/VpnForm.js'
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
        <Route path='/vpn' component={VpnForm} />
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
