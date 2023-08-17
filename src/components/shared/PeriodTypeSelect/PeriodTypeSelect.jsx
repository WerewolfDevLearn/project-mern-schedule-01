import PropTypes from 'prop-types';
import moment from 'moment';
import { useLocation } from 'react-router-dom';

import { Item, List, StyledNavLink } from '../PeriodTypeSelect/PeriodTypeSelect.styled';

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
          to={`/calendar/month/${formattedToday}`}
          onClick={() => onChangeType('month')}
        >
          Month
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className={`${isDayRoute ? 'active' : ''} day`}
          to={`/calendar/day/${formattedToday}`}
          onClick={() => onChangeType('day')}
        >
          Day
        </StyledNavLink>
      </Item>
    </List>
  );
};

PeriodTypeSelect.propTypes = {
  today: PropTypes.string.isRequired,
  onChangeType: PropTypes.func.isRequired
};
