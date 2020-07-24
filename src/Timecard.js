import React from 'react';
import AlarmOn from '@material-ui/icons/AlarmOn';
import './App.css';

export default class Timecard extends React.Component {
  render() {
    return (
      <a href="https://sneller.bosslm.com/lm/mobile/Pages/LoginPage.aspx">
        <div className="btn">
          <AlarmOn />
          <p>Clock In/Out</p>
        </div>
      </a>
    );
  }
}
