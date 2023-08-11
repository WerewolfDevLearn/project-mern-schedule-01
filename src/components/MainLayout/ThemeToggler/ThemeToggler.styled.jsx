import styled from 'styled-components';
import { FiSun } from 'react-icons/fi';
import { FaRegMoon } from 'react-icons/fa';

import { device } from '../../../styles/variables/mediaVeriables';

export const ThemeTogglerStyles = styled.div`
  margin-right: 14px;
  display: flex;
  align-items: center;
`;

export const ToggleThemeBtn = styled.button`
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${({ theme }) => theme.animations.duration};
  transition-timing-function: ${({ theme }) => theme.animations.cubicBezier};
  color: ${({ theme }) => theme.colors.acent};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

//  ----------------------------------------змінити колір на закоментований!!!!!!!!!!!!
export const IconLight = styled(FiSun)`
  width: 24px;
  height: 24px;

  //змінити колір на закоментований
  color: #3e85f3;
  /* color: white; */

  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;

export const IconDark = styled(FaRegMoon)`
  width: 24px;
  height: 24px;

  //змінити колір на закоментований
  color: #3e85f3;
  /* color: white; */

  @media ${device.tablet} {
    width: 32px;
    height: 32px;
  }
`;
