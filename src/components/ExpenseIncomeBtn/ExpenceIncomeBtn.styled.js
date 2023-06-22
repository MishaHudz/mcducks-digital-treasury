import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
`;

export const ButtonExIn = styled.button`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  cursor: pointer;

  width: 138px;
  height: 40px;
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border: none;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;

  &:hover {
    color: #60c470;
    filter: brightness(1.2);
  }
`;
