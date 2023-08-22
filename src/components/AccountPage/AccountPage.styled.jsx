import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AccountPageWrap = styled.div`
  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

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
  justify-content: center;
  gap: 20px;

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-wrap: wrap;
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

  @media screen and (${themes.breakpoints.m} <= width) {
    flex-direction: row;
  }

  @media screen and (${themes.breakpoints.l} < width) {
    gap: 20px;
  }
`;
