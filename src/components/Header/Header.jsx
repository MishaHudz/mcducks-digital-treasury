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
// import { userLogout } from 'store/authOperation';

import CustomModal from 'components/Modal/Modal';
import { useState } from 'react';
import { logOutAction } from 'store/authSlice';

function Header() {
  const accessToken = useSelector(state => state.auth.accessToken);
  const email = useSelector(state => state.auth.user.email);
  const login = email ? email.substring(0, email.indexOf('@')) : '';
  const firstLetter = login ? login.charAt(0).toUpperCase() : '';
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function logoutFunc() {
    setModalIsOpen(true);
  }

  function handleModalConfirm() {
    dispatch(logOutAction());
    setModalIsOpen(false);
  }

  function handleModalCancel() {
    setModalIsOpen(false);
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
            <MediaQuery minWidth={768}>
              <Login>{login}</Login>
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

      <CustomModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalCancel}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </BodyHeader>
  );
}

export default Header;
