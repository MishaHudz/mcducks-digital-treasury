import styled from 'styled-components';
import rectangle from '../../images/Rectangle.png';
import ellipse from '../../images/Ellipse-8.png';
import blur from '../../images/blur.png'

export const Section = styled.section`
  height: 100vh;
  background-image: url(${blur});
  background-repeat: repeat;
  animation: slide-in-bck-center 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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

  @media (min-width: 768px) {
    height: 100%;
    background-image: url(${rectangle});
    background-repeat: no-repeat;
    background-size: 110%;
    background-position-x: -40%;
    background-position-y: -20%;
  }

  @media (min-width: 1280px) {
    height: 100vh;
  }
`;

export const SectionImage = styled.section`
  background-image: url(${ellipse});
  background-size: 600px;
  background-repeat: no-repeat;
  background-position-y: -50%;
  background-position-x: 110%;
  background-clip: content-box;

  @media (min-width: 768px) {
    background-position-y: -30%;
    background-position-x: -70%;
  }

  @media (min-width: 1280px) {
    background-position-y: -30%;
    background-position-x: -20%;
  }
`;

export const SectionDiv = styled.div`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding: 16px 20px 0px 20px;

  @media (min-width: 768px) {
    width: 768px;
    padding: 0px 32px 40px 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 40px 123px 80px 123px;
  }
`;

export const OperationsBox = styled.div`
  /* border-radius: 30px; */
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  border-top-right-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  /* min-height: 346px; */

  max-width: 280px;
  padding-top: 20px;
  padding-bottom: 20px;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    max-width: 704px;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 60px;
  }

  @media (min-width: 1280px) {
    min-width: 1098px;
    padding-bottom: 20px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 50px;
  }
`;

export const OperationsBoxTransaction = styled.div`
  display: flex;
  gap: 74px;

  @media (min-width: 768px) {
    flex-direction: column;
  }

  @media (min-width: 1280px) {
    flex-direction: row;
  }
`;

export const GreenLightImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 664px;
  height: 664px;
  left: -27px;
  top: 0px;
`;

//========тимчасові кнопки=====
export const TestBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  justify-content: flex-end;
  /* width: 1098px; */

  @media (min-width: 768px) {
    width: 704px;
    justify-content: space-between;
    padding-top: 40px;
    margin-bottom: 60px;
  }

  @media (min-width: 1280px) {
    width: 1098px;
    margin-bottom: 8px;
  }
`;

export const TestButton = styled.button`
  background-color: transparent;
  border: 2px solid #80848f;
  color: #80848f;
  border-radius: 16px;
  width: 125px;
  height: 44px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`;

export const TestTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #80848f;
  margin: auto 0;
`;

export const AddTransactionBtn = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const AddTransactionBtnTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
`;
