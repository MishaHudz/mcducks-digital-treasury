import styled from 'styled-components';
export const StyledRegistrationBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 392px;
  background-color: #383847;
  border-radius: 30px;
  padding: 52px 52px;
  margin-bottom: 8px;
  margin-left: auto;
  offset: 0px, 2px rgba(132, 132, 132, 0.2);
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledGoogleTitle = styled.h3`
  width: 218px;
  font-weight: 400;
  margin: 0 auto;
  color: #f6f7fb;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.04em;
  margin-bottom: 20px;
`;
export const StyledGoogleBtn = styled.button`
  width: 120px;
  height: 40px;
  font-size: 14px;
  color: #1f1f27;
  border-radius: 16px;
  border-color: transparent;
  margin: 0 auto;
  letter-spacing: 0.02em;
  margin-bottom: 32px;
  &:hover {
    background-color: rgba(245, 246, 255, 0.9);
    cursor: pointer;
  }
`;

export const StyledParagAuth = styled.p`
  font-size: 14px;
  line-height: 1.14;
  text-align: left;
  color: #f6f7fb;
  margin-bottom: 32px;
`;

export const StyledInput = styled.input`
  height: 48px;
  border-radius: 16px;
  padding: 16px;
  margin-bottom: 32px;
`;

export const StyledInputText = styled.span`
  font-size: 12px;
  text-align: left;
  color: #f6f7fb;
  padding: 8px;
  letter-spacing: 0.04em;
  /* margin-bottom: 8px; */
`;

export const StyledLoginBtn = styled.button`
  width: 136px;
  height: 44px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 16px;
  border-color: transparent;
  color: #ffffff;
  background-color: #42a652;
  offset: 1px, 3px rgba(96, 196, 112, 0.35);
  margin-right: 16px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: 1px 3px 5px 0px #60c47059;
  &:hover {
    background-color: #42a111;
    cursor: pointer;
  }
`;

export const StyledRegisterBtn = styled.button`
  width: 136px;
  height: 44px;
  text-align: center;
  font-size: 12px;
  font-weight: 700;
  border-radius: 16px;
  border-color: transparent;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  box-shadow: 1px 3px 5px 0px rgba(82, 85, 95, 0.15);
  background: rgba(245, 246, 251, 1);

  &:hover {
    background-color: rgba(245, 246, 255, 0.9);
    cursor: pointer;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
`;
