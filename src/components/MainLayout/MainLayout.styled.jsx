import { backgroundColor } from 'src/styles/variables/Variables';
import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MainLayOutContainer = styled.div`
  background: ${({ theme }) => theme.colors.background};
  padding-left: 20px;
  padding-right: 20px;
  height: 100vh;

  @media screen and (${themes.breakpoints.m} < width) {
    padding-right: 32px;
  }
`;
export const MainLayOutSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChildrenContainer = styled.div`
  @media screen and (${themes.breakpoints.m} < width) {
    margin-left: 300px;
  }
`;
