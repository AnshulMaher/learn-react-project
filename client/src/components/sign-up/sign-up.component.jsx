import React, { Component, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { api_call, REQUEST_TYPE } from '../../api';
import { REGISTER } from '../../api/routes';
import { connect, useDispatch } from 'react-redux';
import { sign_up_failure, sign_up_success } from '../../redux/auth/auth.actions';

import './sign-up.styles.css';

function SignUp() {
  const dispatch = useDispatch();

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
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        dispatch(sign_up_success(response.token));
      })
      .catch((error) => {
        dispatch(sign_up_failure(error.message));
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

// class SignUp extends Component {
//   state = { first_name: '', last_name: '', email: '', password: '' };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = this.state;

//     api_call(REGISTER, REQUEST_TYPE.POST, {
//       data: { email, password }
//     })
//       .then((response) => {
//         this.setState({ first_name: '', last_name: '', email: '', password: '' });
//         this.props.signUpSuccess(response.token);
//       })
//       .catch((error) => {
//         this.props.signUpFailure(error.message);
//       });
//   };

//   render() {
//     const { first_name, last_name, email, password } = this.state;
//     return (
//       <div id="signUpContainer">
//         <h2 id="signUpTitle">I do not have a account</h2>
//         <span>Sign up with your email and password</span>
//         <form className="sign-up-form" onSubmit={this.handleSubmit}>
//           <FormInput type="text" name="first_name" value={first_name} handleChange={this.handleChange} label="First Name" required />
//           <FormInput type="text" name="last_name" value={last_name} handleChange={this.handleChange} label="Last Name" required />
//           <FormInput type="email" name="email" label="Email" value={email} handleChange={this.handleChange} required />
//           <FormInput type="password" name="password" label="Password" value={password} handleChange={this.handleChange} required />
//           <CustomButton type="submit">SIGN UP</CustomButton>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   signUpSuccess: (userData) => dispatch(sign_up_success(userData)),
//   signUpFailure: (msg) => dispatch(sign_up_failure(msg))
// });

// export default connect(null, mapDispatchToProps)(SignUp);
