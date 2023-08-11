import PropTypes from 'prop-types';

import { TaskColumnCardStyles } from './TaskColumnCard.styled';

export default function TaskColumnCard({ arg }) {
  return (
    <TaskColumnCardStyles>
      <h2>TaskColumnCard</h2>
      <p>{arg}</p>
    </TaskColumnCardStyles>
  );
}

TaskColumnCard.propTypes = {
  arg: PropTypes.any
};
