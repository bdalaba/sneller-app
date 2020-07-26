import React from 'react';
import BuildIcon from '@material-ui/icons/Build';
import './App.css';

export default class Inspection extends React.Component {
  render() {
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdvCvRSMGFN3vg6Lv6PvnqEubxRDctetGzEOpQeFI5xnuQpsg/viewform">
        <div className="btn">
          <BuildIcon style={{ fontSize: 40 }} />
          <p>Maintenance Request</p>
        </div>
      </a>
    );
  }
}
