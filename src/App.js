import React, { Component } from 'react';
import './stylesheets/App.css';
import NavFire from './components/Navigation/Nav.js';
import Stats from './components/StatusWindow/StatusWindow.js'
import OverViewStat from './components/StatusWindow/StatusModal/OverViewStat.js'
import VpnForm from './components/VpnForm/VpnForm.js'



class App extends Component {
  render() {
    return (
      <div>
        <NavFire/>  
        <Stats />
        <VpnForm />
      </div>
    );
  }
}

export default App;
