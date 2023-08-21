import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import UniversalInput from '../../UniversalInput/UniversalInput';
import { validationChangeEmailRules } from '../accountValidationRules';

import {
  Modal,
  InputsContainer,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailVerifyForm.styled';

export default function ChangeEmailForm({ onClose, callbackEmail, closeChangeEmailVerifyModal }) {
  const initialValues = { code: '' };
  const { t } = useTranslation();

  const handleSubmit = (values) => {
    console.log(values);
    callbackEmail(values);
    closeChangeEmailVerifyModal();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(formik) => {
          return (
            <>
              <Modal>
                {/* {!isUpdating && ( */}
                {/* <Verify> */}
                <InputsContainer>
                  <UniversalInput
                    label={t('VerifyCode')}
                    type="text"
                    name="code"
                    placeholder={t('EnterVerifyCode')}
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    // disabled={
                    //   !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
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

ChangeEmailForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  callbackEmail: PropTypes.func.isRequired,
  closeChangeEmailVerifyModal: PropTypes.bool.isRequired
};
