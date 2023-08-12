import PropTypes from 'prop-types';

import TasksColumn from '../TasksColumn/TasksColumn';
import CustomHorizontalScrollbar from '../CustomHorizontalScrollbar/CustomHorizontalScrollbar';

import { TasksColumnsListStyles } from './TasksColumnsList.styled';

export default function TasksColumnsList({ tasks }) {
  return (
    <CustomHorizontalScrollbar>
      <TasksColumnsListStyles>
        <TasksColumn tasks={tasks.filter((task) => task.category === 'to-do')} title="To do" />

        <TasksColumn
          tasks={tasks.filter((task) => task.category === 'in-progress')}
          title="In progress"
        />

        <TasksColumn tasks={tasks.filter((task) => task.category === 'done')} title="Done" />
      </TasksColumnsListStyles>
    </CustomHorizontalScrollbar>
  );
}

TasksColumnsList.propTypes = {
  tasks: PropTypes.array
};
