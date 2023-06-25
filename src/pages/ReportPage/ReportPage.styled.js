import styled from 'styled-components';
import rectangle from '../../images/Rectangle.png';
import ellipse from '../../images/Ellipse-8.png';
import blur from '../../images/blur.png';

export const Section = styled.section`
  height: 100%;
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
    background-image: url(${rectangle});
    background-repeat: no-repeat;
    background-size: 110%;
    background-position-x: -40%;
    background-position-y: -20%;
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
    padding: 50px 32px 40px 32px;
  }

  @media (min-width: 1280px) {
    width: 1280px;
    padding: 40px 123px 80px 123px;
  }
`;

export const ReportTopBox = styled.div`
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  gap: 60px;
  height: 50px;
  background: linear-gradient(
    115.74deg,
    #383847 23.54%,
    rgba(56, 56, 71, 0.29) 107.94%
  );
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  max-width: 280px;

  @media (min-width: 768px) {
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
  }
`;

export const ReportMiddleBox = styled.div`
  border-radius: 30px;
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
    padding-left: 50px;
    padding-right: 50px;
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
    padding-bottom: 20px;
  }
`;

export const ReportBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  max-width: 280px;

  @media (min-width: 768px) {
    max-width: 704px;
    /* flex-direction: row; */
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
    /* flex-direction: column; */
  }
`;

export const ButtonBox = styled.div`
  display: flex;
`;

export const ButtonExIn = styled.button`
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

  &:active,
  &:hover {
    color: #60c470;
  }
`;

export const TestBox = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 8px;
  justify-content: center;
  max-width: 280px;
  margin-bottom: 32px;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 704px;
    justify-content: space-between;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
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

export const TestBoxReportTitle = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-align: right;
  letter-spacing: 0.04em;
  color: rgba(199, 204, 220, 0.5);
  margin-left: 300px;
`;

export const TestTitleMonth = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.02em;
  color: #80848f;
  margin: auto 0;
`;

export const TestBoxCurrentMonth = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 5px;
`;

export const TestBoxSpanMonth = styled.span`
  color: green;
`;

export const TestCurrentMonthName = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #f6f7fb;
  margin: 0;
`;
