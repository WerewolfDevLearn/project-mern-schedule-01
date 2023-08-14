import { useState } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-tiny-popover';

import { ArrowCircleBrokenRight, Pencil, Trash } from '../../../shared/Icons';

import {
  TaskToolbarStyles,
  TaskToolbarBtn,
  PopoverWrapper,
  RelocateButton
} from './TaskToolbar.styled';

export default function TaskToolbar({ task, openModal }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  
  return (
    <TaskToolbarStyles>
      <Popover
        isOpen={isPopoverOpen}
        positions={['bottom', 'right']}
        align="start"
        padding={8}
        content={
          <PopoverWrapper>
            <RelocateButton>
              In progress <ArrowCircleBrokenRight width="16" height="16" />
            </RelocateButton>
            <RelocateButton>
              Done <ArrowCircleBrokenRight width="16" height="16" />
            </RelocateButton>
          </PopoverWrapper>
        }
        onClickOutside={() => setIsPopoverOpen(false)}
      >
        <TaskToolbarBtn onClick={() => setIsPopoverOpen(true)}>
          <ArrowCircleBrokenRight width="14" height="14" />
        </TaskToolbarBtn>
      </Popover>

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
