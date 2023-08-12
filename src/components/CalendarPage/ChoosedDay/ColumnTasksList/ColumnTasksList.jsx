import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import CustomScrollbar from '../CustomVerticalScrollbar/CustomVerticalScrollbar';

import { ColumnTasksListStyles } from './ColumnTasksList.styled';

export default function ColumnTasksList({ tasks }) {
  return (
    <CustomScrollbar>
      <ColumnTasksListStyles>
        {tasks &&
          tasks.map((task) => (
            <TaskColumnCard key={task._id} task={task} tasksCount={tasks.length} />
          ))}
      </ColumnTasksListStyles>
    </CustomScrollbar>
  );
}

ColumnTasksList.propTypes = {
  tasks: PropTypes.array
};
