import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { themes } from 'src/styles/variables/themes';

export const List = styled.ul`
  display: flex;
  margin-top: 18px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
  }
`;
export const Item = styled.li`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  display: flex;
`;
export const StyledNavLink = styled(NavLink)`
  color: #3e85f3;
  background-color: #e3f3ff;
  &.active {
    background-color: #cae8ff;
    color: #3e85f3;
  }

  &.month {
    padding: 8px 16px;
    border-radius: 8px 0 0 8px;
  }
  &.day {
    padding: 8px 25px;
    border-radius: 0 8px 8px 0;
  }

  @media screen and (min-width: 768px) {
    &.day {
      padding: 8px 26px;
    }
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
