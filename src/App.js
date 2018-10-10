import React, { Component } from 'react';
import './stylesheets/App.css';
import NavFire from './components/Navigation/Nav';
import FirestationRoutes from './components/Router/FSRoutes';

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
