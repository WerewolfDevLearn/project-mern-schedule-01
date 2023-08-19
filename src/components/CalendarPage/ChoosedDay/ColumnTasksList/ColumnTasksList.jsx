import PropTypes from 'prop-types';
import { AnimatePresence } from 'framer-motion';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import CustomScrollbar from '../CustomVerticalScrollbar/CustomVerticalScrollbar';

import { ColumnTasksListStyles } from './ColumnTasksList.styled';

export default function ColumnTasksList({ tasks, openModal }) {
  return (
    <CustomScrollbar>
      <ColumnTasksListStyles>
        <AnimatePresence>
          {tasks &&
            tasks.map((task) => (
              <TaskColumnCard
                key={task._id}
                task={task}
                tasksCount={tasks.length}
                openModal={openModal}
              />
            ))}
        </AnimatePresence>
      </ColumnTasksListStyles>
    </CustomScrollbar>
  );
}

ColumnTasksList.propTypes = {
  tasks: PropTypes.array,
  openModal: PropTypes.func
};
