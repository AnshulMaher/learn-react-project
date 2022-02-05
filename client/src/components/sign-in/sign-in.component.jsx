import { Component, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { api_call, REQUEST_TYPE } from '../../api';
import { LOGIN } from '../../api/routes';
import { connect, useDispatch } from 'react-redux';
import { sign_in_failure, sign_in_success } from '../../redux/auth/auth.actions';
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

    api_call(LOGIN, REQUEST_TYPE.POST, {
      data: credentials
    })
      .then((response) => {
        setCredentials({ email: '', password: '' });
        dispatch(sign_in_success(response.token));
      })
      .catch((error) => {
        dispatch(sign_in_failure(error.message));
      });
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
//     api_call(LOGIN, REQUEST_TYPE.POST, { data: { email, password } })
//       .then((response) => {
//         this.setState({ email: '', password: '' });
//         this.props.signInSuccess(response.token);
//       })
//       .catch((error) => {
//         this.props.signInFailure(error.message);
//       });
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
//   signInSuccess: (userData) => dispatch(sign_in_success(userData)),
//   signInFailure: (msg) => dispatch(sign_in_failure(msg))
// });

// export default connect(null, mapDispatchToProps)(SignIn);
