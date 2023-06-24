import styled from 'styled-components';
import calc from '../../images/calculator.png';

export const TransactionForm = styled.div`
  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1280px) {
    display: flex;
    justify-content: center;
  }
`;
export const Form = styled.form`
  display: flex;
  margin: 0 auto;

  @media (min-width: 320px) and (max-width: 767px) {
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
  }

  @media (min-width: 768px) {
    flex-wrap: wrap;
    row-gap: 32px;
    justify-content: center;
  }

  @media (min-width: 1280px) {
    flex-wrap: nowrap;
  }
`;
export const InputProduct = styled.input`
  width: 280px;
  padding: 15px 15px;
  color: rgba(199, 204, 220, 0.5);
  border: 2px solid #474759;
  border-radius: 0;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: rgba(56, 56, 71, 1);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  @media (min-width: 768px) {
    width: 194px;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 20px;
    text-align: left;
    border-top-right-radius: 0;
  }
  @media (min-width: 1200px) {
    width: 290px;
  }

  &:hover {
    outline: none;
    border: 2px solid #474759;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
  &:focus {
    outline: none;
    border: 2px solid #474759;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
`;
export const InputCalc = styled.input`
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 35px;
  }

  background: url(${calc}) no-repeat;
  background-position: right 15% bottom 50%;
  background-size: 20px;
  background-color: rgba(56, 56, 71, 1);
  padding: 12px 20px;
  border-radius: 0 16px 16px 0;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  border: 2px solid #474759;
  border-radius: 22px;
  @media (min-width: 768px) {
    border-radius: 0 16px 16px 0;
    width: 116px;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 12px 37px;
  }

  &:hover {
    outline: none;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
  &:focus {
    outline: none;
    box-shadow: 0px 6px 7px -2px #41a350;

    &:-webkit-inner-spin-button,
    &:-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;
export const BtnInput = styled.button`
  border: 2px solid transparent;
  padding: 12px 36px;
  border-radius: 16px;
  background: #42a652;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  cursor: pointer;
  @media (min-width: 768px) {
    padding: 12px 37px;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 16px 48px;
  }

  &:hover {
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    background: #3d944c;
    transition: all 0.3s ease 0s;
  }
  &:focus {
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    background: #3d944c;
  }
`;
export const BtnClear = styled.button`
  border-radius: 16px;
  border: 2px solid #474759;
  padding: 12px 36px;
  background-color: rgba(56, 56, 71, 1);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  cursor: pointer;
  transition: all 0.3s ease 0s;
  @media (min-width: 768px) {
    padding: 12px 37px;
    text-align: center;
  }
  @media (min-width: 1200px) {
    padding: 16px 48px;
  }

  &:hover {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    background-color: rgb(70, 70, 88);

    &:focus {
      box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
      background-color: rgb(70, 70, 88);
    }
  }
`;
export const ContainerBtn = styled.div`
  display: flex;
  @media (min-width: 320px) and (max-width: 767px) {
    margin-top: 55px;
    gap: 20px;
  }
  @media (min-width: 768px) {
    gap: 16px;
  }
  @media (min-width: 1200px) {
    padding-left: 32px;
  }
`;

export const AddTransactionBtn = styled.button``;
