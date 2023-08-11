import PropTypes from 'prop-types';

import { ColumnHeadBarStyles } from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ arg }) {
  return (
    <ColumnHeadBarStyles>
      <h2>ColumnHeadBar</h2>
      <p>{arg}</p>
    </ColumnHeadBarStyles>
  );
}

ColumnHeadBar.propTypes = {
  arg: PropTypes.any
};
