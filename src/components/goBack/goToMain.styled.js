import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const GoToMainPage = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width: 100px; */
  margin-right: 85px;
  @media (min-width: 1280px) {
    margin-right: auto;
  }
  @media (max-width: 767px) {
    /* width: 130px; */
    margin-right: auto;
    margin-left: -10px;
  }
`;

export const Text = styled.p`
  color: #c7ccdc;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  @media (max-width: 767px) {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    height: 12px;
  }
`;
