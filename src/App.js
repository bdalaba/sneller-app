import React from 'react';
import logo from './img/sneller-logo.png';
import Button from './Button.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Button
        name="Clock In/Out"
        url="https://sneller.bosslm.com/lm/mobile/Pages/LoginPage.aspx"
      />
      <Button
        name="Fuel Log"
        url="https://docs.google.com/forms/d/e/1FAIpQLSelK2mYi9R8_10N_1x8VLTwPnW7lDjdBUcafBj4edtwpujMMA/viewform"
      />
      <Button name="BambooHR" url="https://snellersg.bamboohr.com/home" />
    </div>
  );
}

export default App;
