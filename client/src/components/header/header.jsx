import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './header.styles.css';

function Header() {
  const isLoggedIn = !!localStorage.getItem('access_token');
  const navigation = useNavigate();
  return (
    <div id="headerContainer">
      <Link id="logoContainer" to="/">
        HOME
      </Link>
      <div id="optionsContainer">
        {isLoggedIn ? (
          <a
            className="optionLink"
            onClick={() => {
              localStorage.setItem('access_token', '');
              navigation('/sign-in');
            }}
          >
            LOG OUT
          </a>
        ) : (
          <Link className="optionLink" to="/sign-in">
            SIGN IN
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
