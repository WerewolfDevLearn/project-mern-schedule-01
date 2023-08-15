import PropTypes from 'prop-types';

import { FeedbackFormStyles } from './FeedbackForm.styled';

export default function FeedbackForm({ arg }) {
  return (
    <FeedbackFormStyles>
      <h2>FeedbackForm</h2>
      <p>{arg}</p>
    </FeedbackFormStyles>
  );
}

FeedbackForm.propTypes = {
  arg: PropTypes.any
};
