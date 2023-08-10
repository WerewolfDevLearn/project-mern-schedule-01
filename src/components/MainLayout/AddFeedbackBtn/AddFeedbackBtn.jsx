import PropTypes from 'prop-types';

import { AddFeedbackBtnStyles } from '../AddFeedbackBtn/AddFeedbackBtn.styled';

export default function AddFeedbackBt({ arg }) {
  return (
    <AddFeedbackBtnStyles>
      <h2>AddFeedbackBt</h2>
      <p>{arg}</p>
    </AddFeedbackBtnStyles>
  );
}

AddFeedbackBt.propTypes = {
  arg: PropTypes.any
};
