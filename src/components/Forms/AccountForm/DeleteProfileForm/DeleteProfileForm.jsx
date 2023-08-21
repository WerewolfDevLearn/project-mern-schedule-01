import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import { XClose, ValidationError } from '../../../shared/Icons';

import {
  Modal,
  XCloseWrap,
  ValidationErrorWrap,
  Title,
  Description,
  InputWrap,
  InputSpan,
  BtnWrap,
  CancelBtn,
  DeleteBtn
} from './DeleteProfileForm.styled';

export default function DeleteProfileForm({ onClose, callBack }) {
  const { t } = useTranslation();

  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = (data) => {
    callBack(data);
  };

  return (
    <>
      <Modal>
        <XCloseWrap onClick={onClose}>
          <XClose width="24" height="24" />
        </XCloseWrap>
        <ValidationErrorWrap>
          <ValidationError width="240" height="240" />
        </ValidationErrorWrap>
        <Title>{t('AreYouSure')}</Title>
        <Description>{t('DeleteProfileConfirmation')}</Description>
        <InputWrap>
          <input
            type="checkbox"
            checked={isChecked}
            name="agreement"
            onChange={() => setIsChecked(!isChecked)}
          />{' '}
          <InputSpan>{t('AgreeToDeleteProfile')}</InputSpan>
        </InputWrap>
        <BtnWrap>
          <CancelBtn onClick={onClose}>{t('Cancel')}</CancelBtn>
          <DeleteBtn type="submit" disabled={!isChecked} onClick={handleSubmit}>
            {t('DeleteProfile')}
          </DeleteBtn>
        </BtnWrap>
      </Modal>
    </>
  );
}

DeleteProfileForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  callBack: PropTypes.func.isRequired
};
