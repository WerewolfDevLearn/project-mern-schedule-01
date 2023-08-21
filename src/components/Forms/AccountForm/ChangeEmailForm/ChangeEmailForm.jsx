// import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { XClose } from '../../../shared/Icons';
import UniversalInput from '../../UniversalInput/UniversalInput';
// import VerifyForm from '../../AuthForms/VerifyForm/VerifyForm';

import { validationChangeEmailRules } from '../accountValidationRules';

import {
  Modal,
  XCloseWrap,
  ChangeEmailTitle,
  InputsContainer,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailForm.styled';

export default function ChangeEmailForm({ onClose, callbackEmail }) {
  const initialValues = { email: '' };
  const { t } = useTranslation();

  // const [isUpdating, setisUpdating] = useState(false);

  const handleSubmit = (values) => {
    callbackEmail(values);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationChangeEmailRules}
        onSubmit={handleSubmit}
      >
        {(formik) => {
          return (
            <>
              <Modal>
                <XCloseWrap onClick={onClose}>
                  <XClose width="24" height="24" />
                </XCloseWrap>
                <ChangeEmailTitle>{t('ChangeEmail')}</ChangeEmailTitle>
                <InputsContainer>
                  <UniversalInput
                    label="New email"
                    type="email"
                    name="email"
                    placeholder={t('EnterNewEmail')}
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    disabled={
                      !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    }
                  >
                    {t('UpdateEmail')}
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

ChangeEmailForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  callbackEmail: PropTypes.func.isRequired,
  openChangeEmailVerifyModal: PropTypes.func.isRequired
};
