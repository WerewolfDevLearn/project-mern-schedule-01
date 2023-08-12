import { useState } from 'react';
import PropTypes from 'prop-types';

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import { Modal } from '../../../shared/Modal/Modal';
import { TaskForm } from '../../../Forms/TaskForm/TaskForm';

import { TasksColumnStyles } from './TasksColumn.styled';

export default function TasksColumn({ tasks, title }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((isOpen) => !isOpen);
  };

  return (
    <>
      <TasksColumnStyles>
        <ColumnHeadBar title={title} openModal={toggleModal} />
        <ColumnTasksList tasks={tasks} />
        <AddTaskBtn tasksCount={tasks.length} openModal={toggleModal} />
      </TasksColumnStyles>
      {modalIsOpen && (
        <Modal onClose={toggleModal}>
          <TaskForm onClose={toggleModal} action="add" column="to-do" />
        </Modal>
      )}
    </>
  );
}

TasksColumn.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string
};
