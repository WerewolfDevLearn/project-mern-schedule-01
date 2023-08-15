import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { Add } from 'src/components/shared/Icons';

import { ColumnHeadBarStyles, TodoTitle, AddBtn } from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ title, openModal }) {
    const { t } = useTranslation();
  return (
    <ColumnHeadBarStyles>
      <TodoTitle>{t(title) }</TodoTitle>
      <AddBtn onClick={() => openModal()}>
        <Add width="22" height="22" />
      </AddBtn>
    </ColumnHeadBarStyles>
  );
}

ColumnHeadBar.propTypes = {
  title: PropTypes.string,
  openModal: PropTypes.func,
  column: PropTypes.string
};
