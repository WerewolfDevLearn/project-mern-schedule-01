import PropTypes from 'prop-types';

import { MonthCalendarHeadStyles } from './MonthCalendarHead.styled';

export default function MonthCalendarHead({ arg }) {
  return (
    <MonthCalendarHeadStyles>
      <h2>MonthCalendarHead</h2>
      <p>{arg}</p>
    </MonthCalendarHeadStyles>
  );
}

MonthCalendarHead.propTypes = {
  arg: PropTypes.any
};
