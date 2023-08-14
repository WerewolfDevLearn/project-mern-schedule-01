import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { themes } from 'src/styles/variables/themes';

export const SideBarBtnClose = styled.button`
  position: absolute;
  top: 36px;
  right: 26px;
`;
export const IoCloseIcon = styled(IoClose)`
  color: ${({ theme }) => theme.colors.loaderWrapper};
  width: 24px;
  height: 24px;
  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    width: 34px;
    height: 34px;
  }

  @media screen and (${themes.breakpoints.m} < width <=${themes.breakpoints.l}) {
    display: none;
  }
`;
