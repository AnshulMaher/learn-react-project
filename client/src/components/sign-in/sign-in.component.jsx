import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { LOGIN } from '../../api/routes';
import { api_call, REQUEST_TYPE } from '../../api';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './sign-in.styles.css';
import { sign_in_success } from '../../redux/auth/auth.actions';

function SignIn() {
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

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
        setCredentials({
          email: '',
          password: ''
        });

        dispatch(sign_in_success(response.token));
      })
      .catch((error) => {
        alert('Error: ' + error.message);
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
