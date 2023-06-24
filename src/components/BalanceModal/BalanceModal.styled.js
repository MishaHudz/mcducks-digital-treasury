import styled from 'styled-components';

export const Sms = styled.div`
width: 260px;
  background: linear-gradient(118.06deg, #58BB67 3.05%, #368342 125.62%);
  border-radius: 30px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.25);
  padding: 24px 32px 24px 32px;
  display: block;
  top: 120%;
  position: absolute;
  z-index: 2;

  @media screen and (max-width: 767px){
    top: 112%;
  }

  @media screen and (min-width: 768px){
    width: 268px;
    height: 156px;
    left: 15%;
  }

  @media screen and (min-width: 1200px){
    width: 292px;
    height: 163px;
    left: 15%;
  }

&::before{
  content: "";
  position: absolute;
  left: 30%;
  top: -19px;
  border: 10px solid transparent;
  border-bottom: 10px solid #58BB67;
}
`;

export const TextUp = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 24px;
`;

export const TextDown = styled.p`
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;
