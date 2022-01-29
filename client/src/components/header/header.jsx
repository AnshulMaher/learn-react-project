import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.css';

function Header() {
  return (
    <div id="headerContainer">
      <Link id="logoContainer" to="/">
        HOME
      </Link>
      <div id="optionsContainer">
        <Link className="optionLink" to="/sign-in">
          SIGN IN
        </Link>
      </div>
    </div>
  );
}

export default Header;
