import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const GoToMainPage = styled(NavLink)`
display: flex;
align-items: center;
width: 100px;
  color:#C7CCDC;
  font-size:12px;
  line-height: 14px;
  letter-spacing: 0.04em;
  text-align: center;
  margin-right:85px;
  @media (min-width: 1280px) {
    margin-right:auto;
  }
`