import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from 'src/components/shared/Modal/Modal';

import { modalBackdropcolors } from 'src/styles/variables/themes';

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

import { TaskForm } from '../../../Forms/TaskForm/TaskForm';

import { TasksColumnStyles } from './TasksColumn.styled';

export default function TasksColumn({ tasks, title }) {
  const [modalOptions, setModalOptions] = useState({ isOpen: false, action: '', taskToEdit: null });

  const openModal = (task) => {
    if (task) {
      setModalOptions({ isOpen: true, action: 'edit', taskToEdit: task });
    }

    if (!task) {
      setModalOptions({ isOpen: true, action: 'add', taskToEdit: null });
    }
  };

  const closeModal = () => {
    setModalOptions({ isOpen: false, action: '', taskToEdit: null });
  };

  return (
    <>
      <TasksColumnStyles>
        <ColumnHeadBar title={title} openModal={openModal} column={title} />
        <ColumnTasksList tasks={tasks} openModal={openModal} />
        <AddTaskBtn tasksCount={tasks.length} openModal={openModal} />
      </TasksColumnStyles>
      <AnimatePresence>
        {modalOptions.isOpen && (
          <Modal onClose={closeModal} color={modalBackdropcolors.grey} clickable>
            <TaskForm
              onClose={closeModal}
              action={modalOptions.action}
              column={title}
              taskToEdit={modalOptions.taskToEdit}
            />
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

TasksColumn.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string
};
