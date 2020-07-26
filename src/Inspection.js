import React from 'react';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import './App.css';

export default class Inspection extends React.Component {
  render() {
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSfp5I9xJ0LNFSfq7Wvv1eWZJ_31IOP9KeE7UzmcXBV0aCgc4Q/viewform">
        <div className="btn">
          <LocalShippingIcon style={{ fontSize: 40 }} />
          <p>Driver Vehicle Inspection Report</p>
        </div>
      </a>
    );
  }
}
