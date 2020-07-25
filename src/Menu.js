import React from 'react';
import ThemeSwitcher from 'react-theme-switcher';

export default class Menu extends React.Component {
  render() {
    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <div
        id="menu"
        /*onMouseUp={this.props.handleMenu}*/ className={visibility}
      >
        <p>Light/Dark</p>
        <ThemeSwitcher
          cssSelector="body"
          switcherColor="#EFF7FF"
          darkColor="#342E37"
          lightColor="#F8F1FF"
          lightTextColor="#342E37"
          darkTextColor="#F8F1FF"
        />
      </div>
    );
  }
}
