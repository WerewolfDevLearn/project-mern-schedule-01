import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Plus } from 'src/components/shared/Icons';

import { AddTaskBtnStyles } from './AddTaskBtn.styled';

export default function AddTaskBtn({ tasksCount, openModal }) {
  const { t } = useTranslation();

  const screenWidth = window.innerWidth;

  return (
    <AddTaskBtnStyles
      initial={{
        marginTop: 0
      }}
      animate={{
        marginTop: screenWidth >= 768 && tasksCount ? '32px' : 0
      }}
      exit={{
        marginTop: 0
      }}
      transition={{
        duration: 0.1
      }}
      count={tasksCount}
      onClick={() => openModal()}
    >
      <Plus width="24" height="24" />
      {t('Add task')}
    </AddTaskBtnStyles>
  );
}

AddTaskBtn.propTypes = {
  tasksCount: PropTypes.number,
  openModal: PropTypes.func
};
