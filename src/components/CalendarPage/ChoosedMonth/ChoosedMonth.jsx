import PropTypes from 'prop-types';

import { ChoosedMonthStyles } from './ChoosedMonth.styled';

export default function ChoosedMonth({ arg }) {
  return (
    <ChoosedMonthStyles>
      <h2>ChoosedMonth</h2>
      <p>{arg}</p>
    </ChoosedMonthStyles>
  );
}

ChoosedMonth.propTypes = {
  arg: PropTypes.any
};
