import styled from 'styled-components';
import Modal from 'react-modal';

export const ExitModal = styled(Modal)`
  top: 40%;
  left: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  position: absolute;
  width: 380px;
  height: 175px;
  background: #383847;
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
  border-radius: 16px;
  filter: drop-shadow(0px 4px 100px rgba(0, 0, 0, 0.5));
  animation: slide-in-elliptic-top-fwd 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  @keyframes slide-in-elliptic-top-fwd {
    0% {
      transform: translateY(-600px) rotateX(-30deg) scale(0);
      transform-origin: 50% 100%;
      opacity: 0;
    }
    100% {
      transform: translateY(0) rotateX(0) scale(1);
      transform-origin: 50% 1400px;
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.02em;
  color: #c7ccdc;
`;

export const BoxButton = styled.div`
  display: flex;
  gap: 16px;
`;

export const Button = styled.button`
  cursor: pointer;
  box-sizing: border-box;
  width: 125px;
  height: 44px;
  border: 2px solid #474759;
  filter: drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.25));
  border-radius: 16px;
  background-color: transparent;
  color: #c7ccdc;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;

  &:hover {
    background-color: #42a652;
    box-shadow: 0px 15px 20px rgba(96, 196, 112, 0.35);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
