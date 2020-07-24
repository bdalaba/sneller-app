import React from 'react';
import './App.css';

export default class Button extends React.Component {
  render() {
    return (
      <a href={this.props.url}>
        <div className="btn">{this.props.name}</div>
      </a>
    );
  }
}
