import PropTypes from 'prop-types';

import { TasksColumnStyles } from './TasksColumn.styled';

export default function TasksColumn({ arg }) {
  return (
    <TasksColumnStyles>
      <h2>TasksColumn</h2>
      <p>{arg}</p>
    </TasksColumnStyles>
  );
}

TasksColumn.propTypes = {
  arg: PropTypes.any
};
