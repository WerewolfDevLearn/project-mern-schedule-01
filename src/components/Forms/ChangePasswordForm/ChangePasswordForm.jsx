import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes, { resetWarningCache } from 'prop-types';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

import PasswordInput from '../PasswordInput/PasswordInput';

import { XClose } from '../../shared/Icons';

import {
  Modal,
  XCloseWrap,
  ChangePasswordTitle,
  InputsContainer,
  FormLabelSpan,
  InputField,
  ErrorMessage,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangePasswordForm.styled';

// const schema = yup.object().shape({});
const schema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required')),
  newPassword: yup
    .string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required')),
  confirmPassword: yup
    .string()
    .min(6, 'The password is short - min 6 characters')
    .required(i18n.t('Password Required'))
});

export default function ChangePasswordForm({ onClose, callBack }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const initialValues = {
    password: '',
    newPassword: '',
    confirmPassword: ''
  };
  const onSubmit = (values) => {
    console.log(values);
    setValidateAfterSubmit(true);
    callBack(data);
    setValidateAfterSubmit(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
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
                <ChangePasswordTitle>Change password</ChangePasswordTitle>
                <InputsContainer>
                  <PasswordInput
                    formik={formik}
                    validateAfterSubmit={validateAfterSubmit}
                    setValidateAfterSubmit={setValidateAfterSubmit}
                    label="Old password"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <PasswordInput
                    formik={formik}
                    validateAfterSubmit={validateAfterSubmit}
                    setValidateAfterSubmit={setValidateAfterSubmit}
                    label="New password"
                    name="newPassword"
                    id="newPassword"
                    placeholder="Password"
                  />
                  <PasswordInput
                    formik={formik}
                    validateAfterSubmit={validateAfterSubmit}
                    setValidateAfterSubmit={setValidateAfterSubmit}
                    label="Confirm new password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm"
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    onClick={handleSubmit}
                    disabled={
                      !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    }
                  >
                    Update password
                  </UpdateBtn>
                  <CancelBtn type="button" onClick={onClose}>
                    Cancel
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
  onClose: PropTypes.func.isRequired
};
