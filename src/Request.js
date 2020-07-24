import React from 'react';
import Event from '@material-ui/icons/Event';
import './App.css';

export default class Requeset extends React.Component {
  render() {
    return (
      <a href="https://snellersg.bamboohr.com/time_off/requests/create">
        <div className="btn">
          <Event />
          <p>Request Time Off</p>
        </div>
      </a>
    );
  }
}
