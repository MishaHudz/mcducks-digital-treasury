import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register, userLogin } from 'store/authOperation';
import {
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
        <StyledInputText>*Email:</StyledInputText>
        <StyledInput
          type="email"
          name="email"
          onChange={handleEmail}
          placeholder="your@email.com"
          required
          value={email}
        />
        <StyledInputText>*Password:</StyledInputText>

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
        </div>
      </StyledForm>
    </StyledRegistrationBox>
  );
}

export default LogInRegPage;
