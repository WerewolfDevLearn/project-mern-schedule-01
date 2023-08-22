import PropTypes from 'prop-types';
import { format } from 'date-fns';

import { TasksCount, CheckStyles } from './TasksBadge.styled';

export default function TasksBadge({ tasks, date, page = 'day' }) {
  const formattedDate = format(date, 'yyyy-MM-dd');
  const tasksFiltered = tasks.filter((task) => task.date === formattedDate);
  const tasksFilteredNotDone = tasksFiltered.filter((task) => task.category !== 'done');
  const tasksFilteredDone = tasksFiltered.filter((task) => task.category === 'done');

  return (
    <>
      {tasksFilteredNotDone.length > 0 ? (
        <TasksCount className={page}>{tasksFilteredNotDone.length}</TasksCount>
      ) : (
        tasksFilteredNotDone.length < 1 &&
        tasksFilteredDone.length >= 1 && (
          <CheckStyles color="#2ac76b" width="15px" height="15px" className={page} />
        )
      )}
    </>
  );
}

TasksBadge.propTypes = {
  tasks: PropTypes.array.isRequired,
  date: PropTypes.instanceOf(Date).isRequired,
  page: PropTypes.string
};
