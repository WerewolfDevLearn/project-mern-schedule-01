import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import XClose from 'src/components/shared/Icons/XClose';
import { changeEM } from 'src/redux/auth/authOps';

import UniversalInput from '../../UniversalInput/UniversalInput';

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

export default function ChangeEmailForm({ onClose, openChangeEmailVerifyModal }) {
  const dispatch = useDispatch();

  const initialValues = { email: '' };
  const { t } = useTranslation();

  const handleSubmit = (values) => {
    dispatch(changeEM(values));
    openChangeEmailVerifyModal();
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
                    label={t('NewEmail')}
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
  openChangeEmailVerifyModal: PropTypes.func.isRequired
};
