import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const Header = styled.header`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 64px;
  padding-left: 20px;
  padding-top: 24px;
`;
export const LoactionSign = styled.h2`
  @media screen and (width <= ${themes.breakpoints.m}) {
    display: none;
  }

  @media screen and (${themes.breakpoints.m} < width <= ${themes.breakpoints.l}) {
    display: block;
    margin-left: 289px;
  }
`;
