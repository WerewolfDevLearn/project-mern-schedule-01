import PropTypes from 'prop-types';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { ChoosedDayStyles } from './ChoosedDay.styled';

export default function ChoosedDay({ arg }) {
  return (
    <ChoosedDayStyles>
      <DayCalendarHead />
      <TasksColumnsList />
    </ChoosedDayStyles>
  );
}

ChoosedDay.propTypes = {
  arg: PropTypes.any
};
