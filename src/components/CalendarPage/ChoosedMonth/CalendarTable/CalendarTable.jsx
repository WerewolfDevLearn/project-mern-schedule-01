import PropTypes from 'prop-types';

import { CalendarTableStyles } from './CalendarTable.styled';

export default function CalendarTable({ arg }) {
  return (
    <CalendarTableStyles>
      <h2>CalendarTable</h2>
      <p>{arg}</p>
    </CalendarTableStyles>
  );
}

CalendarTable.propTypes = {
  arg: PropTypes.any
};
