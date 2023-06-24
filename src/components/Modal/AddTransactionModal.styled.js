import styled from 'styled-components';
import Modal from 'react-modal';

export const ExitModal = styled(Modal)`
  top: 15%;
  left: 0%;
  right: 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 70px;
  position: absolute;
  width: 100%;
  height: 500px;
  background: #383847;
  padding-left: 10px;
  padding-right: 10px;
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

export const CloseModalAddTransaction = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 4px;
  background-color: transparent;
  border: none;
  margin-left: 0;
  margin-right: auto;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  top: 10%;
  left: 10%;
  z-index: 10;
`;
