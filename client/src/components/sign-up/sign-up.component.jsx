import React, { Component, useContext, useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { connect, useDispatch } from 'react-redux';
import { sign_up_start } from '../../redux/auth/auth.actions';

import './sign-up.styles.css';
import NotificationContext from '../../context/store';

function SignUp() {
    const dispatch = useDispatch();
    const { setMessage } = useContext(NotificationContext);

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
        dispatch(sign_up_start({ email, password }, () => setMessage('Sign Up Successful')));
        
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
//     this.props.signUpStart({ email, password });
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
//   signUpStart: (userData) => dispatch(sign_up_start(userData))
// });

// export default connect(null, mapDispatchToProps)(SignUp);
