import { BsBarChart } from 'react-icons/bs';
import UserCheck from 'src/components/shared/Icons/UserCheck';
import CalendarCheck from 'src/components/shared/Icons/CalendarCheck';
import getCurrentDate from 'src/utils/currentDate';
import routes from 'src/routes.js';

import { NavUl, NavLinkStyled, IconDiv } from './UserNav.styled';

export default function UserNav() {
  const getCurrentCalendarPage = () => {
    if (location.pathname.includes('/calendar/month')) {
      return `${routes.navFromLogIn}/${getCurrentDate()}`;
    }
    return `/calendar/day/${getCurrentDate()}`;
  };

  return (
    <NavUl>
      <li key="AccountPage">
        <NavLinkStyled to={routes.accountPage}>
          <IconDiv>
            <UserCheck />
          </IconDiv>
          My account
        </NavLinkStyled>
      </li>
      <li key="CalendarPage">
        {/* <NavLinkStyled to={`${routes.navFromLogIn}/${getCurrentDate()}`}> */}
        <NavLinkStyled to={getCurrentCalendarPage()}>
          <IconDiv>
            <CalendarCheck />
          </IconDiv>
          Calendar
        </NavLinkStyled>
      </li>
      <li key="SatisticsPage">
        <NavLinkStyled to={routes.statisticsPage}>
          <IconDiv>
            <BsBarChart />
          </IconDiv>
          Statistics
        </NavLinkStyled>
      </li>
    </NavUl>
  );
}
