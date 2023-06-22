import styled from 'styled-components';

export const ExInBox = styled.div`
  display: flex;
  gap: 16px;
`;

export const ButtonChange = styled.button`
  transform: matrix(-1, 0, 0, 1, 0, 0);
  background-color: transparent;
  padding: 0;
  border: none;
  cursor: pointer;
`;

export const ExInTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  width: 63px;
  margin: 0;
`;
