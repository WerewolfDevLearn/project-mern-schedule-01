import PropTypes from 'prop-types';

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTaskList from '../ColumnsTasksList/ColumnsTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import { TasksColumnStyles } from './TasksColumn.styled';

export default function TasksColumn({ arg }) {
  return (
    <TasksColumnStyles>
      <ColumnHeadBar />
      <ColumnTaskList />
      <AddTaskBtn />
    </TasksColumnStyles>
  );
}

TasksColumn.propTypes = {
  arg: PropTypes.any
};
