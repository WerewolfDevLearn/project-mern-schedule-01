import PropTypes from 'prop-types';

import PeriodPaginator from '../PeriodPaginator/PeriodPaginator';
import PeriodTypeSelect from '../PeriodTypeSelect/PeriodTypeSelect';

import { CalendarToolbarStyles } from './CalendarToolbar.styled';

export default function CalendarToolbar({ children }) {
  return (
    <CalendarToolbarStyles>
      <PeriodPaginator />
      <PeriodTypeSelect />
      {children}
    </CalendarToolbarStyles>
  );
}
CalendarToolbar.propTypes = {
  children: PropTypes.node.isRequired
};
