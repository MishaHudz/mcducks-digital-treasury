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
import coin from '../../images/coinHeader.png';
import logout from '../../images/logoutHeader.png';
import MediaQuery from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { userLogout } from 'store/authOperation';

function Header() {
  const accessToken = useSelector(state => state.auth.accessToken);
  const email = useSelector(state => state.auth.user.email);
  const login = email ? email.substring(0, email.indexOf('@')) : '';
  const firstLetter = login ? login.charAt(0).toUpperCase() : '';
  const dispatch = useDispatch();

  function logoutFunc() {
    dispatch(userLogout());
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
        {accessToken && (
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
        )}
      </Nav>
    </BodyHeader>
  );
}

export default Header;
