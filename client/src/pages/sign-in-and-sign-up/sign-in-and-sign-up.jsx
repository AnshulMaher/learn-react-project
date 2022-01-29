import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => (
  <div id="signInAndSignUpContainer">
    <SignIn />
    <SignUp />
  </div>
);

export default SignInAndSignUpPage;
