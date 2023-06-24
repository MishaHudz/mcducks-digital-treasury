import styled from 'styled-components';

export const ListStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  max-width: 280px;
  color: rgba(199, 204, 220, 1);
  column-gap: 43px;
  /* align-items: center; */
  align-content: flex-start;
  justify-content: center;
  gap: 40px;

  @media (min-width: 768px) {
    max-width: 704px;
  }

  @media (min-width: 1280px) {
    max-width: 1034px;
  }
`;

export const ItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 6px;
  max-width: 112px;
  font-size: 12px;
`;

export const BoxStyled = styled.div`
  align-items: center;
  background: rgba(86, 86, 107, 0.2);
  border-radius: 32px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.15);
  display: flex;
  float: none;
  height: 64px;
  justify-content: center;
  /* margin: 6px 0; */
  width: 64px;
  margin: 0;
  justify-content: center;
  align-items: center;

  &:hover {
    background: rgba(86, 86, 107, 0.2);
    outline: 1px solid #42a652;
    box-shadow: 0 0 6px #41a350;
    height: 64px;
    width: 64px;
    transform: scale(1.1);
    transition: all 100ms ease-in-out;
    filter: brightness(1.2);
    cursor: pointer;
  }
`;

export const TextStyled = styled.p`
  width: 64px;
  margin: 0;
  display: flex;
  justify-content: center;
`;

//=== === SD === ===

export const CommentTitle = styled.p`
  margin: 0;
`;

export const IconImg = styled.img`
  margin-left: 3px;
  margin-top: 5px;
`;
