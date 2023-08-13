import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import ColumnTasksList from '../ColumnTasksList/ColumnTasksList';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import { Modal } from '../../../shared/Modal/Modal';
import { TaskForm } from '../../../Forms/TaskForm/TaskForm';

import { TasksColumnStyles } from './TasksColumn.styled';

export default function TasksColumn({ tasks, title }) {
  const [modalOptions, setModalOptions] = useState({ isOpen: false, action: '', taskToEdit: null });

  const openModal = (task) => {
    console.log('task', Boolean(task));
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

  useEffect(() => {
    console.log(modalOptions);
  }, [modalOptions]);

  return (
    <>
      <TasksColumnStyles>
        <ColumnHeadBar title={title} openModal={openModal} column={title} />
        <ColumnTasksList tasks={tasks} openModal={openModal} />
        <AddTaskBtn tasksCount={tasks.length} openModal={openModal} />
      </TasksColumnStyles>
      {modalOptions.isOpen && (
        <Modal onClose={closeModal}>
          <TaskForm
            onClose={closeModal}
            action={modalOptions.action}
            column={title}
            taskToEdit={modalOptions.taskToEdit}
          />
        </Modal>
      )}
    </>
  );
}

TasksColumn.propTypes = {
  tasks: PropTypes.array,
  title: PropTypes.string
};
