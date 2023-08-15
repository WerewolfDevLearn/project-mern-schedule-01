import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AccountPageWrap = styled.div`
  padding: 0 20px 40px 20px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding: 0 32px 38px 32px;
  }

  @media screen and (${themes.breakpoints.l} > width) {
  }
`;
