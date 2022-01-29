import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.css';

function SignIn() {
  return (
    <div id="signInContainer">
      <h2 id="signInTitle">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form>
        <FormInput name="email" type="email" label="email" required />
        <FormInput name="password" type="password" label="password" required />
        <div className="buttonsBarContainer">
          <CustomButton type="submit"> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
