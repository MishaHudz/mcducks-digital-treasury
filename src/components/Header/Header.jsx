import {
  BodyHeader,
  Coin,
  ExitBtn,
  FirstLetter,
  Line,
  Login,
  Logo,
  LogoutBtn,
  LogoutImg,
  Nav,
  NLink,
  UserInfo,
} from './Header.styled';
import coin from './1.png';
import logout from './logout2x.png';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import MediaQuery from 'react-responsive';

function Header() {
  // const isAuth = useSelector();
  const email = 'admin@admin.com';
  const login = email.substring(0, email.indexOf('@'));
  const firstLetter = login.charAt(0).toUpperCase();

  // const { user, token } = useSelector(state => state.auth);
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  function logoutFunc() {
    //   dispatch(actions.logout());
    //   deleteToken();
    //   navigate('/');
  }

  return (
    <BodyHeader>
      <Nav>
        <NLink to="/">
          <Logo>
            Budget B
            <span>
              <Coin src={coin} alt="LogoImage" />
            </span>
            ss
          </Logo>
        </NLink>
        {/* {isAuth && 'вміст сторінки нижче'} */}
        <UserInfo>
          <FirstLetter>{firstLetter}</FirstLetter>
          <Login>{login}</Login>
          <MediaQuery minWidth={768}>
            <Line></Line>
            <ExitBtn onClick={logoutFunc} type="button">
              Exit
            </ExitBtn>
          </MediaQuery>
          <MediaQuery maxWidth={767}>
            <LogoutBtn onClick={logoutFunc} type="button">
              <LogoutImg src={logout} alt="logoutIcon" />
            </LogoutBtn>
          </MediaQuery>
        </UserInfo>
      </Nav>
    </BodyHeader>
  );
}

export default Header;
