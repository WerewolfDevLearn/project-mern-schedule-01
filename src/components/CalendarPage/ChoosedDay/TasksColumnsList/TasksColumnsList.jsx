import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import TasksColumn from '../TasksColumn/TasksColumn';
import CustomHorizontalScrollbar from '../CustomHorizontalScrollbar/CustomHorizontalScrollbar';

import { TasksColumnsListStyles } from './TasksColumnsList.styled';

export default function TasksColumnsList({ tasks }) {
  const { currentDate } = useParams();

  const filteredTasks = tasks.filter((task) => task.date === currentDate);

  return (
    <CustomHorizontalScrollbar>
      <TasksColumnsListStyles>
        <TasksColumn
          tasks={filteredTasks.filter((task) => task.category === 'to-do')}
          title="To do"
        />

        <TasksColumn
          tasks={filteredTasks.filter((task) => task.category === 'in-progress')}
          title="In progress"
        />

        <TasksColumn
          tasks={filteredTasks.filter((task) => task.category === 'done')}
          title="Done"
        />
      </TasksColumnsListStyles>
    </CustomHorizontalScrollbar>
  );
}

TasksColumnsList.propTypes = {
  tasks: PropTypes.array
};
