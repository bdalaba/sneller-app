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
            <h2>Training</h2>
            <a href="https://docs.google.com/presentation/d/12f4gkiVWMljvXcK2eVzMSqWrWv2bEToN8MmxXOceRfM/present?slide=id.p">
              <p>BossLM Mobile</p>
            </a>
            <a href="https://docs.google.com/presentation/d/1r3rp5Caiij09YXaAq4jBa8On8niPvUEI3v6f9AGlIIg/edit">
              <p>Lawn Maintenance</p>
            </a>
            <a href="https://docs.google.com/presentation/d/1IFI5iq8yTsbG5VFspRc-jmEOn-AAACddLqw9l5qbiYA/present?slide=id.g38182816e_05">
              <p>Sidewalk Shoveling and Ice Melt</p>
            </a>
            <a href="https://docs.google.com/presentation/d/1BzOMRuicd_vhlQM4q89bn1HWzikplvyW9_wuUoCq2lg/present#slide=id.p">
              <p>Truck Ice Melt</p>
            </a>
            <a href="https://docs.google.com/presentation/d/10Vh1w4PnDSO6Fn-xl1eO8fuFtURaTYYcWFawMLkSgzs/present?slide=id.g34b5061cf_00">
              <p>Plow Operator</p>
            </a>
            <a href="https://docs.google.com/presentation/d/1tEwx5GWrnGyX6qilsau3hk7Vodua_pXyCIQ2mKvfPbc/present#slide=id.p">
              <p>Bobcat/Loader Operator</p>
            </a>
            <a href="https://docs.google.com/presentation/d/1c6fX_XIYsQHwdyeL4ZO7kgQS2r8YD3YM8PD8Fk8KuKk/present#slide=id.p">
              <p>Quad/RTV Operator</p>
            </a>
          </li>
          <li>
            <h2>Settings</h2>
            <p>Light/Dark:</p>
            <ThemeSwitcher
              cssSelector="body"
              switcherColor="#EFF7FF"
              darkColor="#342E37"
              lightColor="#F8F1FF"
              lightTextColor="#342E37"
              darkTextColor="#F8F1FF"
            />
          </li>
        </ul>
      </div>
    );
  }
}
