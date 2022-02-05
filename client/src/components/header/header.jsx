import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { sign_out_failure, sign_out_success } from '../../redux/auth/auth.actions';
import './header.styles.css';

function Header() {
  const isLoggedIn = !!useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();

  const handlSignOut = () => {
    try {
      dispatch(sign_out_success());
    } catch (error) {
      dispatch(sign_out_failure());
    }
  };

  return (
    <div id="headerContainer">
      <Link id="logoContainer" to="/">
        HOME
      </Link>
      <div id="optionsContainer">
        {isLoggedIn ? (
          <a href="#" className="optionLink" onClick={handlSignOut}>
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
