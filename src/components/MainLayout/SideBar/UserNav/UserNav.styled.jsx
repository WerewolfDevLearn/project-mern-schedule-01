import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
export const NavUl = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${({ theme }) => theme.colors.labelInForm};
  background-color: ${({ theme }) => theme.colors.white};
  display: block;
  padding: 10px 14px;
  width: 100%;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 1.2;
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
