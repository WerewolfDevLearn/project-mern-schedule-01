import PropTypes from 'prop-types';

import { ChoosedDayStyles } from './ChoosedDay.styled';

export default function ChoosedDay({ arg }) {
  return (
    <ChoosedDayStyles>
      <h2>ChoosedDay</h2>
      <p>{arg}</p>
    </ChoosedDayStyles>
  );
}

ChoosedDay.propTypes = {
  arg: PropTypes.any
};
