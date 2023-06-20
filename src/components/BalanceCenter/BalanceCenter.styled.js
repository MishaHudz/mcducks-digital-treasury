import styled from 'styled-components';

export const Forma = styled.div`
  position: relative;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  line-height: 1.17;
  color: #c7ccdc;

  @media screen and (max-width: 767px) {
    margin-bottom: 11px;
  }
`;

export const Data = styled.input`
  color: #f6f7fb;
  font-weight: bold;
  font-size: 12px;
  line-height: 1.17;
  text-transform: uppercase;
  &:active,
  &:focus {
    outline: none;
    color: #f6f7fb;
  }
  border: 2px solid #80848f;
  background-color: inherit;
  text-align: center;

  @media screen and (max-width: 767px) {
    border-radius: 22px 0px 0px 22px;
    border-right: none;
    padding-top: 15px;
    padding-bottom: 14.5px;
    width: 140px;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 125px;
    padding-top: 15px;
    padding-bottom: 15px;
    border-radius: 16px;
    border-right: 2px solid #80848f;
    margin-left: 21px;
  }

  @media screen and (min-width: 1200px) {
    text-align: center;
  }
`;

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
  }
  @media screen and (min-width: 768px) {
    text-align: center;
    max-width: 125px;
    padding: 14px 32px;
    border-radius: 16px;
    margin-left: 15px;
  }
`;
