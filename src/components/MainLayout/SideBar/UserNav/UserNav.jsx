import getCurrentDate from 'src/utils/currentDate';

import routes from '../../../../routes.js';

import { NavUl, NavLinkStyled } from './UserNav.styled';

export default function UserNav() {
  return (
    <NavUl>
      <li key="AccountPage">
        <NavLinkStyled to={routes.accountPage}>My account</NavLinkStyled>
      </li>
      <li key="CalendarPage">
        <NavLinkStyled to={`${routes.navFromLogIn}/${getCurrentDate()}`}>Calendar</NavLinkStyled>
      </li>
      <li key="SatisticsPage">
        <NavLinkStyled to={routes.statisticsPage}>Statistics</NavLinkStyled>
      </li>
    </NavUl>
  );
}
