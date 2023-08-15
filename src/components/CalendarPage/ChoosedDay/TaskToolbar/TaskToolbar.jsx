import { useState } from 'react';
import PropTypes from 'prop-types';
import { Popover } from 'react-tiny-popover';

import { useDeleteTasksMutation, useUpdateTasksMutation } from 'src/redux/tasks/tasksApi';

import { ArrowCircleBrokenRight, Pencil, Trash } from 'src/components/shared/Icons';

import {
  TaskToolbarStyles,
  TaskToolbarBtn,
  PopoverWrapper,
  RelocateButton
} from './TaskToolbar.styled';

export default function TaskToolbar({ task, openModal }) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [deleteTask, deleteResult] = useDeleteTasksMutation();
  const [updateTask, updateResult] = useUpdateTasksMutation();

  const categories = ['to-do', 'in-progress', 'done'];
  const categoriesFiltered = categories.filter((category) => category !== task.category);

  const getCategory = (category) => {
    if (category === 'to-do') {
      return 'To do';
    }
    if (category === 'in-progress') {
      return 'In progress';
    }
    if (category === 'done') {
      return 'Done';
    }
  };

  const removeTask = () => {
    deleteTask(task._id);
  };

  const replaceTask = (newCategory) => {
    console.log(newCategory);
    // updateTask({task._id, })
  };

  return (
    <TaskToolbarStyles>
      <Popover
        isOpen={isPopoverOpen}
        positions={['bottom', 'right']}
        align="start"
        padding={8}
        content={
          <PopoverWrapper>
            <RelocateButton onClick={() => replaceTask(getCategory(categoriesFiltered[0]))}>
              {getCategory(categoriesFiltered[0])}
              <ArrowCircleBrokenRight width="16" height="16" />
            </RelocateButton>
            <RelocateButton onClick={() => replaceTask(getCategory(categoriesFiltered[1]))}>
              {getCategory(categoriesFiltered[1])}
              <ArrowCircleBrokenRight width="16" height="16" />
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
        <Trash width="14" height="14" onClick={removeTask} />
      </TaskToolbarBtn>
    </TaskToolbarStyles>
  );
}

TaskToolbar.propTypes = {
  task: PropTypes.object,
  openModal: PropTypes.func
};
