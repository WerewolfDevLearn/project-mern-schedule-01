import { useState } from 'react';
import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { XClose, ValidationError, Trash } from '../../shared/Icons';
import {
  Modal,
  XCloseWrap,
  ValidationErrorWrap,
  Title,
  Description,
  InputWrap,
  BtnWrap,
  CancelBtn,
  DeleteBtn
} from './DeleteProfileForm.styled';

const schema = yup.object().shape({});

export default function DeleteProfileForm({ onClose }) {
  const initialValues = {};

  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);

  const handleSubmit = (values) => {
    console.log('values');
  };

  return (
    <>
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <>
              <Modal>
                <XCloseWrap onClick={onClose}>
                  <XClose width="24" height="24" />
                </XCloseWrap>
                <ValidationErrorWrap>
                  <ValidationError width="200" height="200" />
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
                  I agree to delete profile data
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
        }}
      </Formik>
    </>
  );
}
