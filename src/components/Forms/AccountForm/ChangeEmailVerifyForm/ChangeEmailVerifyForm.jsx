import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import { useDispatch } from 'react-redux';

import { verify } from 'src/redux/auth/authOps';

import UniversalInput from '../../UniversalInput/UniversalInput';
// import { validationChangeEmailRules } from '../accountValidationRules';

import {
  Modal,
  InputsContainer,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailVerifyForm.styled';

export default function ChangeEmailVerifyForm({ onClose }) {
  const initialValues = { verificationCode: '' };
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const handleSubmit = (values) => {
    console.log('values: ', values);
    dispatch(verify(values));
    onClose();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <>
              <Modal>
                <InputsContainer>
                  <UniversalInput
                    label={t('VerifyCode')}
                    type="text"
                    name="verificationCode"
                    placeholder={t('EnterVerifyCode')}
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    // disabled={
                    // !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    // }
                  >
                    {t('Verify')}
                  </UpdateBtn>
                  <CancelBtn type="button" onClick={onClose}>
                    {t('Cancel')}
                  </CancelBtn>
                </BtnWrap>
                {/* </Verify> */}
                {/* )} */}
              </Modal>
            </>
          );
        }}
      </Formik>
    </>
  );
}

ChangeEmailVerifyForm.propTypes = {
  onClose: PropTypes.func.isRequired
};
