import { NavLink } from 'react-router-dom';

import routes from '../../../../routes.js';

export default function UserNav() {
  return (
    <ul>
      <li key="AccountPage">
        <NavLink to={routes.accountPage}>My account</NavLink>
      </li>
      <li key="CalendarPage">
        <NavLink to={routes.calendarMonth}>Calendar</NavLink>
      </li>
      <li key="SatisticsPage">
        <NavLink to={routes.statisticsPage}>Statistics</NavLink>
      </li>
    </ul>
  );
}
