import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { themes } from 'src/styles/variables/themes';

export const UserMenuBTNOpen = styled.button`
  width: 24px;
  height: 24px;
  @media (min-width: ${themes.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    display: none;
  }
`;
export const IoOpenIcon = styled(GiHamburgerMenu)`
  color: ${({ theme }) => theme.colors.loaderWrapper};
  width: 24px;
  height: 24px;
  @media (min-width: ${themes.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }

  @media (min-width: ${themes.breakpoints.l}) {
    display: none;
  }
`;
