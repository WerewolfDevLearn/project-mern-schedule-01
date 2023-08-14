import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { themes } from 'src/styles/variables/themes';

export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 424px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.labelInForm};
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 14px;

  width: 100%;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
  @media screen and (${themes.breakpoints.m} < width <=${themes.breakpoints.l}) {
    font-size: 16px;
  }
  &:hover {
    color: ${({ theme }) => theme.colors.goose};
    background-color: ${({ theme }) => theme.colors.ligthBlue};
    border-radius: 8px;
  }
  &.active {
    color: ${({ theme }) => theme.colors.goose};
    background-color: ${({ theme }) => theme.colors.ligthBlue};
    border-radius: 8px;
  }
`;

export const IconDiv = styled.div`
  display: block;
  width: 24px;
  height: 24px;
  & > * {
    height: 100%;
    width: 100%;
  }
`;
