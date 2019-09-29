import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom';
import "./AppNavBar.scss";

const AppName = process.env.REACT_APP_NAME;

export default function AppNavBar() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo" href="/">{AppName}</a>
        <ul className="right">
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
}
