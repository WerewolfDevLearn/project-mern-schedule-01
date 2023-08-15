import PropTypes from 'prop-types';

import { AddFeedbackBtnStyles } from '../AddFeedbackBtn/AddFeedbackBtn.styled';

export default function AddFeedbackBt({ onGiveFeedBack }) {
  return <AddFeedbackBtnStyles onClick={() => onGiveFeedBack()}>Feedback</AddFeedbackBtnStyles>;
}
AddFeedbackBt.propTypes = {
  onGiveFeedBack: PropTypes.func.isRequired
};
