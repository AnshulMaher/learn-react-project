import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sign_out_start } from '../../redux/auth/auth.actions';
import './header.styles.css';

function Header() {
  const dispatch = useDispatch();
  const userLoggedIn = !!useSelector((state) => state.auth.access_token);

  const handleSignOut = () => dispatch(sign_out_start());

  return (
    <div id="headerContainer">
      <Link id="logoContainer" to="/">
        HOME
      </Link>
      <div id="optionsContainer">
        {userLoggedIn ? (
          <a className="optionLink" href="#" onClick={handleSignOut}>
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
