import { useState } from 'react';
import PropTypes from 'prop-types';

import { ArrowCircleBrokenRight, Pencil, Trash } from '../../../shared/Icons';

import {
  TaskToolbarStyles,
  TaskToolbarBtn,
  MenuStyles,
  MenuItemStyles,
  RelocateButton
} from './TaskToolbar.styled';

export default function TaskToolbar({ task, openModal }) {

  return (
    <TaskToolbarStyles>
      <MenuStyles
        menuClassName="relocate-menu"
        direction="bottom"
        align="start"
        position="10px"
        gap={12}
        menuButton={
          <TaskToolbarBtn>
            <ArrowCircleBrokenRight width="14" height="14" />
          </TaskToolbarBtn>
        }
      >
        <MenuItemStyles>
          <RelocateButton>
            In progress <ArrowCircleBrokenRight width="16" height="16" />
          </RelocateButton>
        </MenuItemStyles>
        <MenuItemStyles>
          <RelocateButton>
            Done <ArrowCircleBrokenRight width="16" height="16" />
          </RelocateButton>
        </MenuItemStyles>
      </MenuStyles>

      <TaskToolbarBtn onClick={() => openModal(task)}>
        <Pencil width="14" height="14" />
      </TaskToolbarBtn>

      <TaskToolbarBtn>
        <Trash width="14" height="14" />
      </TaskToolbarBtn>
    </TaskToolbarStyles>
  );
}

TaskToolbar.propTypes = {
  task: PropTypes.object,
  openModal: PropTypes.func
};
