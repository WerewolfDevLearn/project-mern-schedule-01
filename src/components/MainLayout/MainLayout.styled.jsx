import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MainLayOutContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  padding: 0 20px 40px 20px;

  @media screen and (${themes.breakpoints.m} < width) {
    padding: 0 32px;
  }
`;
export const MainLayOutSubContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ChildrenContainer = styled.div`
  /* @media screen and (${themes.breakpoints.m} < width) {
    margin-left: 300px;
  } */
`;
