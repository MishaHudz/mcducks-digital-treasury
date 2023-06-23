import  styled  from "styled-components";


export const SummaryBlock = styled.div `
border-radius: 30px;
display: flex;
flex-direction: column;
gap: 60px;
height: 50px;
background: linear-gradient(
  115.74deg,
  #383847 23.54%,
  rgba(56, 56, 71, 0.29) 107.94%
);
box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
align-items: center;
`
export const SummaryText = styled.div `
display: flex;
    margin: 15px 20px 15px 20px;
    font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #C7CCDC;`

export const SummaryNum = styled.span `margin:0 15px 0 15px`
export const SummaryExpenses = styled.span `color: #FE4566;
margin-right: 0;`
export const SummaryBreak = styled.span `margin: 0 10px`
export const SummaryIncome = styled.span `color: #60C470;`