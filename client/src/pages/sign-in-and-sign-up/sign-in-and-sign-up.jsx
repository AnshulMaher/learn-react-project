import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => {
  const userLoggedIn = !!useSelector((state) => state.auth.access_token);
  if (userLoggedIn) return <Navigate to="/" />;
  return (
    <div id="signInAndSignUpContainer">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
