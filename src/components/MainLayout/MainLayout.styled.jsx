import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MainLayOutContainer = styled.div`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (${themes.breakpoints.m} < width) {
    /* padding-right: 32px; */
    margin: 0 auto;
    display: flex;
  }
`;
export const MainLayOutSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChildrenContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 20px;

  @media screen and (${themes.breakpoints.s} < width) {
    padding: 0 32px;
  }
  @media screen and (${themes.breakpoints.l} < width) {
    padding: 0 32px;
  }
`;
