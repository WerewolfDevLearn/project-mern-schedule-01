import styled from 'styled-components';
import { modalBackdropcolors, themes } from 'src/styles/variables/themes';

export const SidebarBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;

  width: 100%;
  height: 100%;

  background: ${modalBackdropcolors.black};

  opacity: ${({ open }) => (open ? 1 : 0)};
  pointer-events: ${({ open }) => (open ? 'all' : 'none')};

  transition: opacity 100ms linear;
`;

export const SideBarContainer = styled.aside`
  position: absolute;
  z-index: 2;
  left: -225px;
  background-color: ${({ theme }) => theme.colors.backgroundSidebar};
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding: 24px 20px;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 100ms ease-in-out;
  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    position: absolute;
    z-index: 2;
    left: -290px;
    width: 290px;
    padding: 32px;
  }
  @media screen and (${themes.breakpoints.m} < width) {
    position: relative;
    z-index: 0;
    left: 0px;
    width: 290px;
    padding: 24px;
    transform: none;
    transition: none;
  }
`;
export const SideBarHeading = styled.h3`
  font-size: 12px;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.labelInForm};
  @media screen and (${themes.breakpoints.s} < width <=${themes.breakpoints.m}) {
    font-size: 14px;
    margin-bottom: 32px;
  }
`;
