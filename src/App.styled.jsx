import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';
export const DivColorWrapperAPP = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DivWrapperAPP = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media screen and (${themes.breakpoints.l} < width) {
    width: ${themes.breakpoints.l};
  }
`;
