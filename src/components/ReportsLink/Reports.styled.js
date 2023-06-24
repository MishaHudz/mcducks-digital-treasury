import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BoxReport = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
`;

export const BoxReportTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  color: rgba(199, 204, 220, 0.5);
  /* margin-left: 300px; */
`;
