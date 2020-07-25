import React from 'react';
import LocalHospital from '@material-ui/icons/LocalHospital';
import './App.css';

export default class Covid extends React.Component {
  render() {
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdywFAy3WMEs0fJnUuVnvK6I18L-QjGk5Xf4Qc0_ygEhaM94w/viewform">
        <div className="btn">
          <LocalHospital style={{ fontSize: 40 }} />
          <p>COVID-19 Self Screen</p>
        </div>
      </a>
    );
  }
}
