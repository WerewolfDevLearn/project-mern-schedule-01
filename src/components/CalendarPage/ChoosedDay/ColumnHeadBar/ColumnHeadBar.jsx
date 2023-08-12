import PropTypes from 'prop-types';

import { Add } from 'src/components/shared/Icons';

import { ColumnHeadBarStyles, TodoTitle, AddBtn } from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ title, openModal }) {
  return (
    <ColumnHeadBarStyles>
      <TodoTitle>{title}</TodoTitle>
      <AddBtn onClick={openModal}>
        <Add width="22" height="22" />
      </AddBtn>
    </ColumnHeadBarStyles>
  );
}

ColumnHeadBar.propTypes = {
  title: PropTypes.string
};
