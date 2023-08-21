import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const Header = styled.header`
  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background: ${({ theme }) => theme.colors.background};
  width: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: t;
  align-items: center;
  margin-bottom: 95px;
  padding-top: 24px;

  @media screen and (${themes.breakpoints.s} < width) {
    max-width: 768px;
    margin-bottom: 64px;
    padding-top: 24px;
  }
  @media screen and (${themes.breakpoints.m} < width) {
    margin-bottom: 32px;
    max-width: 1440px;
    padding-top: 40px;
  }
  @media screen and (${themes.breakpoints.l} < width) {
    width: 1440px;
    padding-top: 40px;
  }
`;

export const LoactionSign = styled.h2`
  @media screen and (width <= ${themes.breakpoints.m}) {
    display: none;
  }

  @media screen and (${themes.breakpoints.m} < width) {
    display: block;
  }
`;

export const WrapTogglers = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 15px;
`;
