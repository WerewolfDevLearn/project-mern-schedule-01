import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;

  background: ${themes.colors.backgroundAuth};
`;

export const ContentWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${themes.breakpoints.l};
  height: 100%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 18px;

  padding: 0 20px;

  font-size: ${themes.fontSizes.xs};

  @media screen and (max-width: ${themes.breakpoints.s}) {
    width: 100%;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    gap: 24px;
  }
`;

export const StyledImg = styled.picture`
  display: none;

  position: absolute;
  width: 368px;
  bottom: 19px;
  right: 60px;

  @media screen and (min-width: ${themes.breakpoints.l}) {
    display: block;
  }
`;
