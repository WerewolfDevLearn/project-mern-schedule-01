import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const SvgEye = styled.img`
  position: absolute;
  right: 46px;
  bottom: 11px;
  width: 24px;
  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    bottom: 18px;
  }
`;
