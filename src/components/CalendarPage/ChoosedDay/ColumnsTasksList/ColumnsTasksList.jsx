import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';

import { ColumnsTasksListStyled } from './ColumnsTasksList.styled';

export default function ColumnsTasksList({ arg }) {
  return (
    <ColumnsTasksListStyled>
      {/* must be maped) */}
      <TaskColumnCard />
    </ColumnsTasksListStyled>
  );
}

ColumnsTasksList.propTypes = {
  arg: PropTypes.any
};
