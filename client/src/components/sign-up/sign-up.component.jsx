import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.css';

function SignUp() {
  return (
    <div id="signUpContainer">
      <h2 id="signUpTitle">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form">
        <FormInput type="text" name="first_name" label="First Name" required />
        <FormInput type="text" name="last_name" label="Last Name" required />
        <FormInput type="email" name="email" label="Email" required />
        <FormInput type="password" name="password" label="Password" required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
