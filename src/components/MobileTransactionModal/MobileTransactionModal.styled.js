import styled from 'styled-components';

export const BackDrop = styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #0000007e;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Modal = styled.div`
padding: 32px 20px;
  padding-top: 45px;
  width: 100%;

  position: absolute;
  top: 280px;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  filter: drop-shadow(0px 4px 40px rgba(0, 0, 0, 0.25));
  background: #383847;
  box-shadow: inset 0px 2px 14px rgba(132, 132, 132, 0.2);
`