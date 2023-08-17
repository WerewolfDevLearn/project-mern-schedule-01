import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { AddFeedbackBtnStyles } from '../AddFeedbackBtn/AddFeedbackBtn.styled';

export default function AddFeedbackBt({ openModal }) {
  const { t } = useTranslation();

  return <AddFeedbackBtnStyles onClick={openModal}>{t('Feedback')}</AddFeedbackBtnStyles>;
}
AddFeedbackBt.propTypes = {
  openModal: PropTypes.func.isRequired
};
