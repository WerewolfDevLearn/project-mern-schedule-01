import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AccountPageWrap = styled.div`
  padding-bottom: 40px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding-bottom: 38px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-bottom: 32px;
  }
`;
