import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { themes } from 'src/styles/variables/themes';

export const UserMenuBTNOpen = styled.button`
  @media screen and (width <= ${themes.breakpoints.s}) {
    display: block;
    width: 24px;
    height: 24px;
  }
  @media screen and (${themes.breakpoints.s} < width <= ${themes.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }
  @media screen and (width >= ${themes.breakpoints.m}) {
    display: none;
  }
`;
export const IoOpenIcon = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.colors.loaderWrapper};
  width: 100%;
  height: 100%;
`;
// color: ${({ theme }) => theme.colors.loaderWrapper};
// width: 24px;
// height: 24px;
// width: 34px;
//     height: 34px;
