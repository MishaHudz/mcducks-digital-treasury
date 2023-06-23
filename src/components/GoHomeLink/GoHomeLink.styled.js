import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MLink = styled(Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    line-height: 12px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.02em;
    color: #F6F7FB;
    text-transform: uppercase;

    @media screen and (min-width: 768px) {
      display: block;
      text-decoration: none;
      color: #C7CCDC;
      font-weight: 400;
      font-size: 12px;
      letter-spacing: 0.04em;
      text-align: center;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    @media screen and (min-width: 1280px) {
      display: flex;
      align-items: center;
      gap: 16px;
      color: #C7CCDC;
    }
`;

export const Back = styled.img`
display: flex;
  width: 13px;
  height: 9px;

  @media screen and (max-width: 767px){
    margin-right: 6px;
    } 

  @media screen and (min-width: 768px){
    color: #F6F7FB;
    }

  @media screen and (min-width: 1280px){
    display: flex;
    color: #F6F7FB;
    }
`;