import PropTypes from 'prop-types';

import { Avatar } from '../../../shared/Icons';

import TaskToolbar from '../TaskToolbar/TaskToolbar';

import {
  TaskColumnCardStyles,
  TaskTitle,
  TaskCardWrap,
  TaskCardInner,
  OwnerAvatarOverlay,
  TaskPriority
} from './TaskColumnCard.styled';

export default function TaskColumnCard({ task, tasksCount, openModal }) {
  const { title, priority } = task;
  return (
    <>
      <TaskColumnCardStyles taskscount={tasksCount}>
        <TaskTitle>{title}</TaskTitle>
        <TaskCardWrap>
          <TaskCardInner>
            <OwnerAvatarOverlay>
              <Avatar width="32" height="32" />
            </OwnerAvatarOverlay>
            <TaskPriority priority={priority}>{priority}</TaskPriority>
          </TaskCardInner>
          <TaskToolbar task={task} openModal={openModal} />
        </TaskCardWrap>
      </TaskColumnCardStyles>
    </>
  );
}

TaskColumnCard.propTypes = {
  task: PropTypes.object.isRequired,
  tasksCount: PropTypes.number,
  openModal: PropTypes.func
};
