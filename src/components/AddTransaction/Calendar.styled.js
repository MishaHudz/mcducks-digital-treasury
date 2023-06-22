import styled from 'styled-components';
import calendar from '../../images/calendar.png';
export const Input = styled.input`
width:104px;
background: url(${calendar}) no-repeat;
background-position: left 5% bottom 50%;
  background-size: 20px;
  background-color:rgba(56,56,71);
  border:none;
  color:#C7CCDC;
  font-family:'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 1.16;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  padding-left:30px;
  height: 20px;
  max-width: 104px;
  height: 40px;
  overflow: hidden;
  cursor:pointer;
  border-radius:4px;
&:hover,
&:focus{
    outline:none;
    box-shadow: 0px 0px 6px #41a350;
}
`
export const ContainerDate = styled.div`
display:flex;
width:104px;
margin-right:32px;
align-items:center !important;
`