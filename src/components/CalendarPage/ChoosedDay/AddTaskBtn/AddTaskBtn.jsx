import PropTypes from 'prop-types';

import { Plus } from 'src/components/shared/Icons';

import { AddTaskBtnStyles } from './AddTaskBtn.styled';

export default function AddTaskBtn({ tasksCount, openModal }) {
  return (
    <AddTaskBtnStyles taskscount={tasksCount} onClick={() => openModal()}>
      <Plus width="24" height="24" />
      Add task
    </AddTaskBtnStyles>
  );
}

AddTaskBtn.propTypes = {
  tasksCount: PropTypes.number,
  openModal: PropTypes.func
};
