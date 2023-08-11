import PropTypes from 'prop-types';

import TasksColumn from '../TasksColumn/TasksColumn';

import { TasksColumnsListStyles } from './TasksColumnsList.styled';

export default function TasksColumnsList({ arg }) {
  return (
    <TasksColumnsListStyles>
      <h2>TasksColumnsList</h2>
      <TasksColumn key="To do" />
      <TasksColumn key="In progress" />
      <TasksColumn key="Done" />
    </TasksColumnsListStyles>
  );
}

TasksColumnsList.propTypes = {
  arg: PropTypes.any
};
