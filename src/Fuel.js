import React from 'react';
import LocalGasStation from '@material-ui/icons/LocalGasStation';
import './App.css';

export default class Fuel extends React.Component {
  render() {
    return (
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSelK2mYi9R8_10N_1x8VLTwPnW7lDjdBUcafBj4edtwpujMMA/viewform">
        <div className="btn">
          <LocalGasStation />
          <p>Fuel Log</p>
        </div>
      </a>
    );
  }
}
