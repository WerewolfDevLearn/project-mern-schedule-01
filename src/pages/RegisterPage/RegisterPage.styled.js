import styled from 'styled-components';

export const Container = styled.div`
  /* position: relative; */
  height: 100vh;
  width: 100vw;

  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;

  background: #dcebf7;
`;

export const Wrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  padding: 0 20px;

  font-size: 12px;

  @media screen and (max-width: 375px) {
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;

export const StyledImg = styled.picture`
  position: absolute;
  width: 400px;
  bottom: 0;
  left: 20px;
`;
