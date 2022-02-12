import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import NotificationContext from '../../context/store';
import { sign_out_start } from '../../redux/auth/auth.actions';
import './header.styles.css';

function Header() {
  const isLoggedIn = !!useSelector((state) => state.auth.access_token);
  const dispatch = useDispatch();
  const { setMessage } = useContext(NotificationContext);

  const handlSignOut = () => dispatch(sign_out_start(() => setMessage('Log Out Successful')));

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
