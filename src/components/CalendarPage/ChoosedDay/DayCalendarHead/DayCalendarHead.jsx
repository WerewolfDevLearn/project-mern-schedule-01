import PropTypes from 'prop-types';

import { DayCalendarHeadStyles } from './DayCalendarHead.styled';

export default function DayCalendarHead({ arg }) {
  return (
    <DayCalendarHeadStyles>
      <h2>DayCalendarHead</h2>
      <p>{arg}</p>
    </DayCalendarHeadStyles>
  );
}

DayCalendarHead.propTypes = {
  arg: PropTypes.any
};
