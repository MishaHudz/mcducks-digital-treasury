import styled from 'styled-components';
import rectangle from '../../images/Rectangle.png';
import ellipse from '../../images/Ellipse-8.png';

export const Section = styled.section`
  background-image: url(${rectangle});
  background-repeat: no-repeat;
  background-size: 110%;
  background-position-x: -40%;
  background-position-y: -10%;
  height: calc(100vh - 60px);
  overflow-y: hidden;

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
`;

export const SectionImage = styled.section`
  background-image: url(${ellipse});
  background-size: 600px;
  background-repeat: no-repeat;
  background-position-y: -40%;
  background-position-x: 2%;
  background-clip: content-box;
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
  border-bottom-left-radius: 30px;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  width: 1098px;
  height: 574px;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  padding: 32px;
`;

export const OperationsBoxTransaction = styled.div`
  display: flex;
  gap: 74px;
`;

export const GreenLightImg = styled.img`
  position: absolute;
  z-index: 1;
  width: 664px;
  height: 664px;
  left: -27px;
  top: 0px;
`;

// export const ButtonBox = styled.div`
//   display: flex;
// `;

// export const ButtonExIn = styled.button`
//   font-family: 'Roboto';
//   font-style: normal;
//   font-weight: 700;
//   font-size: 12px;
//   line-height: 14px;
//   align-items: center;
//   text-align: center;
//   letter-spacing: 0.02em;
//   text-transform: uppercase;
//   color: #f6f7fb;
//   cursor: pointer;

//   width: 138px;
//   height: 40px;
//   background: linear-gradient(245.22deg, #383847 14.1%, #2d2d38 89.51%);
//   border: none;
//   border-top-left-radius: 20px;
//   border-top-right-radius: 20px;

//   &:active,
//   &:hover {
//     color: #60c470;
//     filter: brightness(1.2);
//   }
// `;

//========тимчасові кнопки=====
export const TestBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  justify-content: flex-end;
  width: 1098px;
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
