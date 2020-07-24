import React from 'react';
import logo from './img/sneller-logo.png';
import Timecard from './Timecard.js';
import Fuel from './Fuel.js';
import Request from './Request.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Timecard />
      <Fuel />
      <Request />
    </div>
  );
}

export default App;
