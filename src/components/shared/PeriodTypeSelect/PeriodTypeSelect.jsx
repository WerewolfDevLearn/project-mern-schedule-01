import PropTypes from 'prop-types';

import { PeriodTypeSelectStyles } from './PeriodTypeSelect.styled';

export default function PeriodTypeSelect({ arg }) {
  return (
    <PeriodTypeSelectStyles>
      <h2>PeriodTypeSelect</h2>
      <p>{arg}</p>
    </PeriodTypeSelectStyles>
  );
}

PeriodTypeSelect.propTypes = {
  arg: PropTypes.any
};
