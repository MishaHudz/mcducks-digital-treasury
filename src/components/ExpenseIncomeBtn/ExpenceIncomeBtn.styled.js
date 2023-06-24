import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 12px;

  @media (max-width: 767px) {
    position: fixed;
    bottom: 0px;
    right: 20px;
  }
`;

export const ButtonEx = styled.button`
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-radius: 0px 16px 0px 0px;
  /* width: 159px; */
  width: 100%;
  height: 53px;
  border: transparent;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  justify-content: center;

  &:hover {
    background: #383847;
    border-width: 1px 1px 0px 0px;
    border-style: solid;
    border-color: #60c470;
    box-shadow: 0px 0px 6px #41a350;
    color: #60c470;
  }

  @media (max-width: 767px) {
    ${({ isActive }) => {
      return isActive
        ? 'background: #383847; border-width: 1px 1px 0px 0px; border-style: solid;border-color: #60c470; box-shadow: 0px 0px 6px #41a350; color: #60c470;'
        : '';
    }}
  }

  @media (min-width: 768px) {
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
      border-width: none;
      border-style: none;
      border-color: none;
      box-shadow: none;
    }
  }

  @media (min-width: 1280px) {
  }
`;

export const ButtonIn = styled.button`
  background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
  border-radius: 16px 0px 0px 0px;
  /* width: 159px; */
  width: 100%;
  height: 53px;
  border: transparent;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  justify-content: center;

  &:hover {
    background: #383847;
    border-width: 1px 1px 0px 0px;
    border-style: solid;
    border-color: #60c470;
    box-shadow: 0px 0px 6px #41a350;
    color: #60c470;
  }

  @media (max-width: 767px) {
    ${({ isActive }) => {
      return isActive
        ? 'background: #383847; border-width: 1px 1px 0px 0px; border-style: solid;border-color: #60c470; box-shadow: 0px 0px 6px #41a350; color: #60c470;'
        : '';
    }}
  }

  @media (min-width: 768px) {
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
      border-width: none;
      border-style: none;
      border-color: none;
      box-shadow: none;
    }
  }

  @media (min-width: 1280px) {
  }
`;
