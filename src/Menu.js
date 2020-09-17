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
        <ul>
          <li>
            <h2>Company Info</h2>
            <a href="https://www.snellersg.com">
              <p>Visit Website</p>
            </a>
            <a href="https://drive.google.com/file/d/1PzORQkvb45domxwwoO_njvBDjn0X84QK/view">
              <p>Employee Handbook</p>
            </a>
            <a href="https://drive.google.com/file/d/1bHfzVwiX-em7clChlL0klGzS7zSsTZsy/view">
              <p>COVID-19 Response Plan</p>
            </a>
          </li>
          <li>
            <h2>Settings</h2>
            <p>Light/Dark:</p>
            <ThemeSwitcher
              cssSelector="body"
              switcherColor="#EFF7FF"
              darkColor="#342E37"
              lightColor="#EFF7FF"
              lightTextColor="#342E37"
              darkTextColor="#EFF7FF"
            />
          </li>
        </ul>
      </div>
    );
  }
}
