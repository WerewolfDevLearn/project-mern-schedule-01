import PropTypes from 'prop-types';

import { PeriodPaginatorStyles } from './PeriodPaginator.styled';

export default function PeriodPaginator({ arg }) {
  return (
    <PeriodPaginatorStyles>
      <h2>PeriodPaginator</h2>
      <p>{arg}</p>
    </PeriodPaginatorStyles>
  );
}

PeriodPaginator.propTypes = {
  arg: PropTypes.any
};
