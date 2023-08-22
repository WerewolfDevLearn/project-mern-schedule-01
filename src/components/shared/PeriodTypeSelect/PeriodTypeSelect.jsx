import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { useTranslation } from 'react-i18next';

import { Item, List, StyledNavLink } from '../PeriodTypeSelect/PeriodTypeSelect.styled';

export const PeriodTypeSelect = ({ today, onChangeType }) => {
  const formattedToday = format(new Date(today), 'yyyy-MM-dd');

  const { t } = useTranslation();

  return (
    <List>
      <Item>
        <StyledNavLink
          className="month"
          to={`/calendar/month/${formattedToday}`}
          onClick={() => onChangeType('month')}
        >
          {t('Month')}
        </StyledNavLink>
      </Item>
      <Item>
        <StyledNavLink
          className="day"
          to={`/calendar/day/${formattedToday}`}
          onClick={() => onChangeType('day')}
        >
          {t('Day')}
        </StyledNavLink>
      </Item>
    </List>
  );
};

PeriodTypeSelect.propTypes = {
  today: PropTypes.string.isRequired,
  onChangeType: PropTypes.func.isRequired
};
