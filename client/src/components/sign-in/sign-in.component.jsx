import { Component, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect, useDispatch } from 'react-redux';
import {  sign_in_start } from '../../redux/auth/auth.actions';
import './sign-in.styles.css';

function SignIn() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sign_in_start(credentials));
  };
  
  return (
    <div id="signInContainer">
      <h2 id="signInTitle">I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={credentials.email} label="email" handleChange={handleChange} required />
        <FormInput name="password" type="password" value={credentials.password} label="password" handleChange={handleChange} required />
        <div className="buttonsBarContainer">
          <CustomButton type="submit"> Sign in </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;

// class SignIn extends Component {
//   state = { email: '', password: '' };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const { email, password } = this.state;
//     this.props.signInStart({ email, password } );
//   };

//   render() {
//     const { email, password } = this.state;
//     return (
//       <div id="signInContainer">
//         <h2 id="signInTitle">I already have an account</h2>
//         <span>Sign in with your email and password</span>

//         <form onSubmit={this.handleSubmit}>
//           <FormInput name="email" type="email" value={email} label="email" handleChange={this.handleChange} required />
//           <FormInput name="password" type="password" value={password} label="password" handleChange={this.handleChange} required />
//           <div className="buttonsBarContainer">
//             <CustomButton type="submit"> Sign in </CustomButton>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   signInStart: (credentials) => dispatch(sign_in_start(credentials))
// });

// export default connect(null, mapDispatchToProps)(SignIn);
