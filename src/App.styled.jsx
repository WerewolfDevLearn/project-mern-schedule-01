import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';
export const DivWrapperAPP = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.background};
  @media screen and (${themes.breakpoints.l} < width) {
    width: 1440px;
    margin: 0 auto;
  }
`;
