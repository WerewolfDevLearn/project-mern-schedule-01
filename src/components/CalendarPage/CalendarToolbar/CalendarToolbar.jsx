import PropTypes from 'prop-types';

import { CalendarToolbarStyles } from './CalendarToolbar.styled';

export default function CalendarToolbar({ arg }) {
  return (
    <CalendarToolbarStyles>
      <h2>CalendarToolbar</h2>
      <p>{arg}</p>
    </CalendarToolbarStyles>
  );
}

CalendarToolbar.propTypes = {
  arg: PropTypes.any
};
