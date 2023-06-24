import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  color: #c7ccdc;
  font-weight: 400;
  font-size: 12px;
  line-height: 1.16;
  text-align: center;
  text-transform: uppercase;
  margin-left: 0px;
  border-radius: 0px 22px 22px 0px;
  border: 2px solid #80848f;
  background-color: inherit;
  letter-spacing: 0.02em;
  cursor: pointer;
  &:active,
  &:focus {
    background-color: #42a652;
    border-color: transparent;
    color: #f6f7fb;
  }

  @media screen and (max-width: 767px) {
    padding-top: 16px;
    padding-bottom: 14px;
    padding-right: auto;
    width: 140px;
    border-left: none;
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 125px;
    padding: 14px 32px;
    border-radius: 16px;
    margin-left: 15px;
  }
`;
