import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #dcebf7;
`;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1440px;
  height: 100%;
`;

export const Wrap = styled.div`
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
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
