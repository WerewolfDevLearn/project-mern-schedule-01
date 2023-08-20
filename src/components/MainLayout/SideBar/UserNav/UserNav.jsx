import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { BsBarChart } from 'react-icons/bs';
import UserCheck from 'src/components/shared/Icons/UserCheck';
import CalendarCheck from 'src/components/shared/Icons/CalendarCheck';
import getCurrentDate from 'src/utils/currentDate';
import routes from 'src/routes.js';

import { NavUl, NavLinkStyled, IconDiv } from './UserNav.styled';

export default function UserNav(callBackCls) {
  const location = useLocation();
  const [isCalendar, setIsCalendar] = useState();
  const { t } = useTranslation();

  useEffect(() => {
    setIsCalendar(location.pathname.includes('/calendar'));
  }, [location]);

  return (
    <NavUl>
      <li key="AccountPage">
        <NavLinkStyled to={routes.accountPage} onClick={callBackCls}>
          <IconDiv>
            <UserCheck />
          </IconDiv>
          {t('My Account')}
        </NavLinkStyled>
      </li>
      <li key="CalendarPage">
        <NavLinkStyled
          to={`${routes.navFromLogIn}/${getCurrentDate()}`}
          className={isCalendar && 'active'}
          onClick={callBackCls}
        >
          <IconDiv>
            <CalendarCheck />
          </IconDiv>
          {t('Calendar')}
        </NavLinkStyled>
      </li>
      <li key="StatisticsPage">
        <NavLinkStyled to={routes.statisticsPage} onClick={callBackCls}>
          <IconDiv>
            <BsBarChart />
          </IconDiv>
          {t('Statistics')}
        </NavLinkStyled>
      </li>
    </NavUl>
  );
}
