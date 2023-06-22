import styled from 'styled-components';

export const BarChartContainer = styled.div`
  width: 1034px;
  height: 422px;
  padding: 0;

  @media (min-width: 320px) {
    width: 280px;
  }

  @media (min-width: 768px) {
    width: 704px;
    border-radius: 30px;
    padding: 20px 0px;
    background: linear-gradient(
      115.74deg,
      #383847 23.54%,
      rgba(56, 56, 71, 0.29) 107.94%
    );
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 1280px) {
    width: 1034px;
    padding: 23px 138px;
  }
`;
