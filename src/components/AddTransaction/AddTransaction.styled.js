import styled from 'styled-components';
import calc from '../../images/calculator.png';

export const TransactionForm = styled.div`
 display: flex;
 justify-content: center;
 `
export const Form = styled.form`
display: flex;
margin: 0 auto;
`
export const InputProduct = styled.input`
width: 290px;
  padding: 15px 15px;
  color: rgba(199, 204, 220, 0.5);
  border: 2px solid #474759;
  border-radius: 0;
  border-top-left-radius: 16px;
  background-color: rgba(56, 56, 71, 1);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;

  &:hover{
    outline: none;
    border: 2px solid #474759;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
  &:focus {
    outline: none;
    border: 2px solid #474759;
    box-shadow: 0px 6px 7px -2px #41a350;
  }
`
export const InputCalc = styled.input`
background: url(${calc}) no-repeat;
  background-position: right 15% bottom 50%;
  background-size: 20px;
  padding: 12px 37px;
  border-radius: 0 16px 16px 0;
  width: 116px;
  text-align: center;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.02em;
  color: #c7ccdc;
  border: 2px solid #474759;
  background-color: rgba(56, 56, 71, 1);

  &:hover{
  outline: none;
  box-shadow: 0px 6px 7px -2px #41a350;
}
  &:focus {
  outline: none;
  box-shadow: 0px 6px 7px -2px #41a350;
}
`
export const BtnInput = styled.button`
border: 2px solid transparent;
  padding: 16px 48px;
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
  text-align: center;
  cursor: pointer;
  margin-left: 10px;
  margin-right: 10px;

  &:hover{
  box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
  background: #3d944c;
  &:focus{
    box-shadow: 1px 3px 5px rgba(96, 196, 112, 0.35);
    background: #3d944c;
}
`
export const BtnClear = styled.button`
border-radius: 16px;
  border: 2px solid #474759;
  padding: 16px 48px;
  text-align: center;
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

  &:hover{
  box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
  background-color: rgb(70, 70, 88);
  &:focus {
    box-shadow: 1px 3px 5px rgba(0, 0, 0, 0.15);
    background-color: rgb(70, 70, 88);
  }
}
`
export const ContainerBtn = styled.div`
display:flex;
gap:16px;
margin-left:32px;
`