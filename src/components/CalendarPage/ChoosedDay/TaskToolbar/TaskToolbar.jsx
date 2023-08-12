import { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowCircleBrokenRight, Pencil, Trash } from '../../../shared/Icons';

import { TaskToolbarStyles, TaskToolbarBtn, RelocateMenu } from './TaskToolbar.styled';

export default function TaskToolbar({ task }) {
  const [popperIsOpen, togglePopper] = useState(false);

  return (
    <TaskToolbarStyles>
      <TaskToolbarBtn id="menu-btn" onClick={() => togglePopper((x) => !x)}>
        <ArrowCircleBrokenRight width="14" height="14" />
      </TaskToolbarBtn>

      <TaskToolbarBtn>
        <Pencil width="14" height="14"/>
      </TaskToolbarBtn>

      <TaskToolbarBtn>
        <Trash width="14" height="14" />
      </TaskToolbarBtn>
    </TaskToolbarStyles>
  );
}

TaskToolbar.propTypes = {
  task: PropTypes.object
};
