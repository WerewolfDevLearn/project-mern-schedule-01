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
  @media screen and (${themes.breakpoints.s} < width <= ${themes.breakpoints.m}) {
    line-height: 1.4;
  }
  @media screen and (${themes.breakpoints.m} < width) {
    font-size: 24px;
    line-height: 1;
  }
`;
export const LogoIMG = styled.img`
  width: 36px;
  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    width: 60px;
  }
  @media screen and (${themes.breakpoints.m} < width) {
    width: 70px;
  }
`;
