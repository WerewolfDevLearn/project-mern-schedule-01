import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import PasswordInput from '../../PasswordInput/PasswordInput';
import { validationChangePasswordRules } from '../accountValidationRules';
import { XClose } from '../../../shared/Icons';

import {
  Modal,
  XCloseWrap,
  ChangePasswordTitle,
  InputsContainer,
  InputWrap,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangePasswordForm.styled';

export default function ChangePasswordForm({ onClose, callbackPassword }) {
  const { t } = useTranslation();

  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const initialValues = {
    newPassword: '',
    confirmPassword: ''
  };
  const onSubmit = (data) => {
    setValidateAfterSubmit(true);
    callbackPassword(data);
    setValidateAfterSubmit(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationChangePasswordRules}
        onSubmit={onSubmit}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validateOnMount={false}
      >
        {(formik) => {
          const { handleSubmit } = formik;

          return (
            <>
              <Modal>
                <XCloseWrap onClick={onClose}>
                  <XClose width="24" height="24" />
                </XCloseWrap>
                <ChangePasswordTitle>{t('ChangePassword')}</ChangePasswordTitle>
                <InputsContainer>
                  <InputWrap>
                    <PasswordInput
                      formik={formik}
                      validateAfterSubmit={validateAfterSubmit}
                      setValidateAfterSubmit={setValidateAfterSubmit}
                      label={t('NewPassword')}
                      name="newPassword"
                      id="newPassword"
                      placeholder={t('Password')}
                    />
                  </InputWrap>
                  <InputWrap>
                    <PasswordInput
                      formik={formik}
                      validateAfterSubmit={validateAfterSubmit}
                      setValidateAfterSubmit={setValidateAfterSubmit}
                      label={t('ConfirmNewPassword')}
                      name="confirmPassword"
                      id="confirmPassword"
                      placeholder={t('Confirm')}
                    />
                  </InputWrap>
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    onClick={() => handleSubmit()}
                    disabled={
                      !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    }
                  >
                    {t('UpdatePassword')}
                  </UpdateBtn>
                  <CancelBtn type="button" onClick={onClose}>
                    {t('Cancel')}
                  </CancelBtn>
                </BtnWrap>
              </Modal>
            </>
          );
        }}
      </Formik>
    </>
  );
}

ChangePasswordForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  callbackPassword: PropTypes.func.isRequired
};
