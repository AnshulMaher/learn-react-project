import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sign_out_success } from '../../redux/auth/auth.actions';
import './header.styles.css';

function Header() {
  const dispatch = useDispatch();
  const userLoggedIn = !!useSelector((state) => state.auth.access_token);
  return (
    <div id="headerContainer">
      <Link id="logoContainer" to="/">
        HOME
      </Link>
      <div id="optionsContainer">
        {userLoggedIn ? (
          <a className="optionLink" onClick={() => dispatch(sign_out_success())}>
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
