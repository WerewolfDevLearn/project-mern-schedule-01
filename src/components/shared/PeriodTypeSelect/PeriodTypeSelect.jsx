import { Item, List, StyledNavLink } from '../PeriodTypeSelect/PeriodTypeSelect.styled';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import React from 'react';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  const location = useLocation();
  const isMonthRoute = location.pathname.includes('month');
  const isDayRoute = location.pathname.includes('day');
  const formattedToday = moment(today).format('YYYY-MM-DD');

  return (
    <List>
      <Item>
        <StyledNavLink
          className={`${isMonthRoute ? 'active' : ''} month`}
          to={`/month/${formattedToday}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`/day/${formattedToday}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};
