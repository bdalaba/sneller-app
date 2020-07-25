import React from 'react';
import DragHandle from '@material-ui/icons/DragHandle';
import Close from '@material-ui/icons/Close';
import './App.css';

export default class MenuButton extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.ButtonIcon = this.ButtonIcon.bind(this);
  }

  ButtonIcon(props) {
    const isVisible = this.props.menuVisibility;
    if (isVisible) {
      return <Close style={{ fontSize: 40 }} />;
    }
    return <DragHandle style={{ fontSize: 40 }} />;
  }

  render() {
    return (
      <button id="menuButton" onMouseUp={this.props.handleMenu}>
        {this.ButtonIcon()}
      </button>
    );
  }
}
