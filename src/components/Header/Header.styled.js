import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BodyHeader = styled.header`
  background: #1f1f27;
  box-shadow: 0px 7px 24px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;

  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-bck-center {
    0% {
      transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const Nav = styled.nav`
  padding: 12px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 320px) {
    width: 320px;
  }

  @media (min-width: 768px) {
    width: 768px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Logo = styled.p`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 400;
  font-size: 23.3169px;
  line-height: 32px;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 23.3169px;
    line-height: 32px;
  }
`;

export const NLink = styled(NavLink)`
  text-decoration: none !important;
  background: linear-gradient(
    180deg,
    #60c470 50%,
    rgba(96, 196, 112, 0) 107.5%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  &:hover {
    filter: brightness(1.2);
  }

  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @keyframes slide-in-bck-center {
    0% {
      transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const Coin = styled.img`
  width: 16px;
  height: 16px;
  display: inline-block;
  margin-bottom: -2.5px;

  &:hover {
    animation: vibrate-1 0.5s linear infinite both;
    @keyframes vibrate-1 {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    }
  }
`;

export const Login = styled.p`
  margin: 0;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #c7ccdc;
  cursor: default;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const FirstLetter = styled.p`
  font-style: bold;
  font-size: 12px;
  line-height: 14px;
  color: #c7ccdc;
  margin: 0px 0px 0px -8px;
  width: 32px;
  height: 32px;
  background: #56566b;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: default;
`;

export const Line = styled.span`
  height: 36px;
  width: 0px;
  border: 1px solid #e0e5eb;
  margin-right: -20px;
`;

export const ExitBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration-line: underline;
  color: #c7ccdc;
  padding: 12px 20px;
`;

export const LogoutImg = styled.img`
  width: 16px;
  height: 16px;
`;

export const LogoutBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: transparent;

  padding: 0;
  /* padding: 12px 20px; */
`;
