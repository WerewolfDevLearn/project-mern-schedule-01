import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { ChoosedDayStyles } from './ChoosedDay.styled';

export default function ChoosedDay({ arg }) {
  const { currentDate } = useParams();
  const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  const date = { year, month };
  const { data: tasks, isFetching, isLoading } = useGetTasksQuery(date);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ChoosedDayStyles>
      <DayCalendarHead date={currentDate} />
      <TasksColumnsList tasks={tasks.tasks} />
    </ChoosedDayStyles>
  );
}

ChoosedDay.propTypes = {
  arg: PropTypes.any
};
