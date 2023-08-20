import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AccountPageWrap = styled.div`
  /* padding-bottom: 40px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding-bottom: 38px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-bottom: 32px;
  } */

  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding: 40px 175px 40px 175px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding: 60px 165px 60px 164px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    /* gap: 10px; */
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    bottom: 8%;
    right: -8%;
    gap: 20px;
  }
`;

export const ChangeValueBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    flex-direction: row;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    gap: 20px;
  }
`;
