import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MainLayOutContainer = styled.div`
  width: 100%;
  @media screen and (${themes.breakpoints.m} < width) {
    margin: 0 auto;
    display: flex;
  }
`;
export const MainLayOutSubContainer = styled.div`
  width: 100%;
  height: 100vh;
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  @media screen and (${themes.breakpoints.s} < width) {
    padding-left: 32px;
    padding-right: 32px;
  }
  @media screen and (${themes.breakpoints.l} < width) {
    width: 1087px;
    padding-bottom: 42px;
  }
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 42px;

  @media screen and (${themes.breakpoints.s} < width) {
    /* max-width: 704px; */
    padding-bottom: 42px;
  }
`;
