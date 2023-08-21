import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const LogoDiv = styled.div`
  display: flex;
  width: 136px;
  gap: 10px;
  align-items: center;
  margin-bottom: 32px;
  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    width: 160px;
  }
  @media screen and (${themes.breakpoints.m} < width) {
    width: 222px;
  }
`;
export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.goose};
  font-size: 16px;
  font-weight: 700;
  line-height: 1.37;

  @media screen and (width >= ${themes.breakpoints.l}) {
    font-size: 24px;
  }
`;
export const LogoIMG = styled.img`
  width: 36px;
  @media screen and (${themes.breakpoints.m} < width) {
    width: 60px;
  }
  @media screen and (${themes.breakpoints.l} < width) {
    width: 70px;
  }
`;
