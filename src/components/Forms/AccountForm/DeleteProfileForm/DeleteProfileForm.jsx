import { useState } from 'react';
import PropTypes from 'prop-types';
import i18n from 'i18next';
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
        <Title>Are you sure?</Title>
        <Description>This action will permanently delete the profile data.</Description>
        <InputWrap>
          <input
            type="checkbox"
            checked={isChecked}
            name="agreement"
            onChange={() => setIsChecked(!isChecked)}
          />{' '}
          <InputSpan>I agree to delete profile data</InputSpan>
        </InputWrap>
        <BtnWrap>
          <CancelBtn onClick={onClose}>Cancel</CancelBtn>
          <DeleteBtn type="submit" disabled={!isChecked} onClick={handleSubmit}>
            Delete profile
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
