import React from 'react';
import logo from './img/sneller-logo.png';
import Menu from './Menu';
import MenuButton from './MenuButton';
import Timecard from './Timecard.js';
import Fuel from './Fuel.js';
import Request from './Request.js';
import './App.css';

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      menuVisible: false,
    };

    this.handleMenu = this.handleMenu.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleMenu(e) {
    this.toggleMenu();
    e.stopPropagation();
  }

  toggleMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible,
    });
  }

  render() {
    return (
      <div className="App">
        <Menu
          handleMenu={this.handleMenu}
          menuVisibility={this.state.menuVisible}
        />
        <MenuButton
          handleMenu={this.handleMenu}
          menuVisibility={this.state.menuVisible}
        />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Timecard />
        <Fuel />
        <Request />
      </div>
    );
  }
}
