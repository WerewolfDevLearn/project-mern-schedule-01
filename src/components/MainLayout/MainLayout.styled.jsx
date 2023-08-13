import { backgroundColor } from 'src/styles/variables/Variables';
import styled from 'styled-components';

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
  display: flex;
  justify-content: center;
  align-items: center;
`;
