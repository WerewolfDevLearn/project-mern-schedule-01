import PropTypes from 'prop-types';

import { AddTaskBtnStyles } from './AddTaskBtn.styled';

export default function AddTaskBtn({ arg }) {
  return (
    <AddTaskBtnStyles>
      <h2>AddTaskBtn</h2>
      <p>{arg}</p>
    </AddTaskBtnStyles>
  );
}

AddTaskBtn.propTypes = {
  arg: PropTypes.any
};
