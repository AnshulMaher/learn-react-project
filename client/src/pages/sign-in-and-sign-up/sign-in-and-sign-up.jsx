import { Navigate } from 'react-router-dom';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './sign-in-and-sign-up.styles.css';

const SignInAndSignUpPage = () => {
  if (!!localStorage.getItem('access_token')) {
    return <Navigate to="/" />;
  }

  return (
    <div id="signInAndSignUpContainer">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUpPage;
