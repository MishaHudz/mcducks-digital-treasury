import styled from "styled-components";

export const SummaryText = styled.p`
width: 92px;
`
export const SummaryList = styled.ul`
overflow-y: scroll;
::-webkit-scrollbar {
    width: 6px;
}
::-webkit-scrollbar-track {
  background-color: #474759;
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
