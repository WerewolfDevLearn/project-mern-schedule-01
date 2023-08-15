import { backgroundColor } from 'src/styles/variables/Variables';
import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MainLayOutContainer = styled.div`
  /* background-color: ${({ theme }) => theme.colors.backgroundAuth}; */
  background-color: ${backgroundColor.grey};
  padding-left: 0;
  padding-right: 20px;
  height: 100vh;
`;
export const MainLayOutSubContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChildrenContainer = styled.div`

  @media screen and (${themes.breakpoints.m} < width) {
    margin-left: 321px;
    padding-left: 32px;
  }
`;
