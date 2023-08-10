import PropTypes from 'prop-types';

import { TaskToolbarStyles } from './TaskToolbar.styled';

export default function TaskToolbar({ arg }) {
  return (
    <TaskToolbarStyles>
      <h2>TaskToolbar</h2>
      <p>{arg}</p>
    </TaskToolbarStyles>
  );
}

TaskToolbar.propTypes = {
  arg: PropTypes.any
};
