import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register, userLogin } from 'store/authOperation';
import wallet from '../../images/walletStart.png';
import tabletMoney from '../../images/TabletMoney.png';
import ellipse from '../../images/Ellipse-8.png';
import {
  StyledErrorText,
  StyledForm,
  StyledGoogleBtn,
  StyledGoogleTitle,
  StyledImgBox,
  // StyledImgtablet,
  StyledInput,
  StyledInputText,
  StyledLoginBtn,
  StyledParagAuth,
  StyledRegisterBtn,
  StyledRegistrationBox,
  StyledSectionRegister,
  StyledStarRequared,
  StyledImg,
  StyledEllipse,
} from './LogInRegPage.styled';
import { useNavigate } from 'react-router';
import { useMediaQuery } from 'react-responsive';

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
  const { accessToken } = useSelector(state => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    accessToken && navigate({ pathname: '/', search: 'operation=expences' });
  }, [accessToken, navigate]);

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
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 1280 });
    return isDesktop ? children : null;
  };
  const isTablet = useMediaQuery({ maxWidth: 1279 });
  const isMob = useMediaQuery({ maxWidth: 767 });
  // const Tablet = ({ children }) => {
  //   const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1279 });
  //   return isTablet ? children : null;
  // };
  // const Mobile = ({ children }) => {
  //   const isMobile = useMediaQuery({ maxWidth: 767 });
  //   return isMobile ? children : null;
  // };

  return (
    <StyledSectionRegister style={{}}>
      <Desktop>
        <StyledImgBox>
          <img src={wallet} alt="wallet" />
        </StyledImgBox>
      </Desktop>
      {isTablet && !isMob && (
        <StyledImg>
          <img src={tabletMoney} alt="Money" />
          <StyledEllipse>
            <img src={ellipse} alt="ellipse" width="700px" height="700px" />
          </StyledEllipse>
        </StyledImg>
      )}

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
            <StyledStarRequared>*</StyledStarRequared>Email:
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
            <StyledStarRequared>*</StyledStarRequared>Password:
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
      {/* <Desktop>Desktop or laptop</Desktop>
      <Tablet>Tablet</Tablet>
      <Mobile>Mobile</Mobile> */}
    </StyledSectionRegister>
  );
}

export default LogInRegPage;
