import styled from "styled-components";

export const SummaryText = styled.p`
width: 92px;
color: #C7CCDC;
`
export const SummaryAmount = styled.p`
width: 92px;
display: flex;
justify-content: flex-end;
color: #C7CCDC;

`
export const SummaryList = styled.ul`
overflow-y: scroll;
padding-top: 2px;
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
  background-color: #474759;
  min-height: 100%;
}
::-webkit-scrollbar-thumb {
  background-color:#60C470;;
  border-radius: 2px;
}
height: inherit;
`
export const SummaryListItem = styled.li`
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(86, 86, 107, 0.5);
margin-top:2px;
height: 38px;
`
export const SummaryWrapper = styled.div`
width: 213px;
height: 280px;
`
export const SummaryTitle = styled.p`
height: 38px;
display: flex;
align-items: center;
justify-content: center;
color: #F6F7FB;
letter-spacing: 0.02em;
text-transform: uppercase;
font-weight: 700;
font-size:12px;
line-height: 14px;
border-top-right-radius: 12px;
border-top-left-radius: 12px;
margin: 0;
background-color: rgba(86, 86, 107, 0.5)
`;
