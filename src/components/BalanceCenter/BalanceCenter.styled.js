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
    padding-top: 15px;
    padding-bottom: 14.5px;
    width: 140px;

    ${({ isInputDisabled }) => {
      return isInputDisabled ? 'border-radius: 22px 22px 22px 22px;' : '';
    }}
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

export const BoxBalance = styled.div`
  display: flex;
`;
