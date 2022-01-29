import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.styles.css';
import { api_call, REQUEST_TYPE } from '../../api';
import { REGISTER } from '../../api/routes';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'first_name':
        setFirstName(value);
        break;

      case 'last_name':
        setLastName(value);
        break;
      case 'list_name':
        setLastName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reqBody = { email, password };

    api_call(REGISTER, REQUEST_TYPE.POST, {
      data: reqBody
    })
      .then((response) => {
        localStorage.setItem('access_token', response.token);

        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        navigate("/");

      })
      .catch((error) => {
        alert('Error: ' + error.message);
      });
  };

  return (
    <div id="signUpContainer">
      <h2 id="signUpTitle">I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput type="text" name="first_name" value={first_name} handleChange={handleChange} label="First Name" required />
        <FormInput type="text" name="last_name" value={last_name} handleChange={handleChange} label="Last Name" required />
        <FormInput type="email" name="email" label="Email" value={email} handleChange={handleChange} required />
        <FormInput type="password" name="password" label="Password" value={password} handleChange={handleChange} required />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
