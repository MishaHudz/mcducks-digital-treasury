import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, userLogin } from 'store/authOperation';
import {
  StyledErrorText,
  StyledForm,
  StyledGoogleBtn,
  StyledGoogleTitle,
  StyledInput,
  StyledInputText,
  StyledLoginBtn,
  StyledParagAuth,
  StyledRegisterBtn,
  StyledRegistrationBox,
} from './LogInRegPage.styled';

function LogInRegPage() {
  const [email, setEmail] = useState('');
  const [userPass, setUserPass] = useState('');
  const [operation, setOperation] = useState(false);
  const dispatch = useDispatch();
  const { error } = useSelector(state => state.auth);
  const resetForm = () => {
    setEmail('');
    setUserPass('');
  };

  const handleEmail = e => {
    setEmail(e.target.value);
  };
  const handlePass = e => {
    setUserPass(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (operation === 'login') {
      dispatch(userLogin({ email, userPass }));
      resetForm();
      return;
    }
    dispatch(register({ email, userPass }));
    resetForm();
  };

  return (
    <StyledRegistrationBox>
      <StyledGoogleTitle>
        You can log in with your Google Account
      </StyledGoogleTitle>
      <StyledGoogleBtn type="button">Google</StyledGoogleBtn>
      <StyledParagAuth>
        Or log in using an email and password, after registering:
      </StyledParagAuth>

      <StyledForm onSubmit={handleSubmit}>
        <StyledInputText>
          <span style={{ color: 'red', fontSize: '14px' }}>*</span>Email:
        </StyledInputText>
        <StyledInput
          type="email"
          name="email"
          onChange={handleEmail}
          placeholder="your@email.com"
          required
          value={email}
        />
        <StyledInputText>
          <span style={{ color: 'red', fontSize: '14px' }}>*</span>Password:
        </StyledInputText>

        <StyledInput
          type="password"
          name="password"
          onChange={handlePass}
          placeholder="********"
          required
          value={userPass}
        />
        <div>
          <StyledLoginBtn type="submit" onClick={() => setOperation('login')}>
            Log in
          </StyledLoginBtn>
          <StyledRegisterBtn
            type="submit"
            onClick={() => setOperation('register')}
          >
            Registration
          </StyledRegisterBtn>
          {error && <StyledErrorText>{error}</StyledErrorText>}
        </div>
      </StyledForm>
    </StyledRegistrationBox>
  );
}

export default LogInRegPage;
