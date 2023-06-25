import styled from 'styled-components';
import ellipse from '../../images/Ellipse-8.png';
import rectangle from '../../images/Rectangle.png';
import blur from '../../images/blur.png'
export const StyledRegistrationBox = styled.div`
  @media (min-width: 320px) {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 280px;
    background-color: #383847;
    border-radius: 16px;
    padding: 32px 20px;
    margin: 0 auto;
    margin-bottom: 8px;
    box-shadow: 0px 2px 14px 0px rgba(132, 132, 132, 0.2) inset;

    z-index: 1;
  }

  @media (min-width: 768px) {
    min-width: 392px;
    padding: 52px;
    position: absolute;
    top: 65%;
    left: 50%;
    transform: translate(-50%,-50%);
  }

  @media (min-width: 1280px) {
    position: absolute;
    top: 60%;
    left: 75%;
    transform: translate(-50%,-50%);
    z-index: 1000;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const StyledGoogleTitle = styled.h3`
  @media (min-width: 320px) {
    min-width: 203px;
    font-weight: 400;
    margin: 0 auto;
    padding: 0 25px;

    color: #f6f7fb;
    font-size: 14px;
    line-height: 1.14;
    letter-spacing: 0.04em;
    margin-bottom: 20px;
  }

  @media (min-width: 768px) {
    min-width: 218px;
    padding: 0 40px;
  }

  @media (min-width: 1280px) {
  }
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
  margin: 0;
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
  @media (min-width: 320px) {
    width: 116px;
    height: 44px;
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    border-radius: 16px;
    border-color: transparent;
    color: #ffffff;
    background-color: #42a652;
    offset: 1px, 3px rgba(96, 196, 112, 0.35);
    margin-right: 8px;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    box-shadow: 1px 3px 5px 0px #60c47059;
    transition: all 0.3s ease 0s;
    &:hover {
      background-color: #42a111;
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    width: 136px;
    margin-right: 16px;
  }
`;

export const StyledRegisterBtn = styled.button`
  @media (min-width: 320px) {
    min-width: 116px;
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
    transition: all 0.3s ease 0s;

    &:hover {
      background-color: rgba(245, 246, 255, 0.9);
      cursor: pointer;
    }
  }

  @media (min-width: 768px) {
    min-width: 136px;
  }
`;

export const StyledErrorText = styled.p`
  color: red;
`;

export const StyledStarRequared = styled.span`
  color: red;
  font-size: 14px;
`;

export const StyledSectionRegister = styled.section`
  height: 100vh;
  width: 100%;
  display: flex;
  background-color: #474759;
  align-items: center;
  background-repeat: repeat;
  background-image: url(${blur});
  background-size: 115%;
  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  @media (min-width: 768px) {
    background-image: url(${rectangle});
    background-repeat: no-repeat;
  }
  @keyframes slide-in-bck-center {
    0% {
      transform: translateZ(600px);
      opacity: 0;
    }
    100% {
      transform: translateZ(0);
      opacity: 1;
    }
  }
`;

export const StyledImgBox = styled.div`
  height: 575px;
  width: 675px;
  margin-top: 100px;
  background-image: url(${ellipse});
  background-size: 600px;
  background-repeat: no-repeat;
  background-position: center;
  background-clip: content-box;
  z-index: 1;
`;
export const StyledImg = styled.div`
width: 647px;
height: 544px;
position: absolute;
top: 30%;
left: 48%;
transform: translate(-50%,-50%);
`;
export const StyledEllipse = styled.div`
position: absolute;
top: 40%;
left: 48%;
transform: translate(-50%,-50%);
z-index: -1;
`