import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { XClose } from '../../../shared/Icons';
import VerifyForm from '../../AuthForms/VerifyForm/VerifyForm';

import { validationChangeEmailRules } from '../accountValidationRules';

import {
  Modal,
  XCloseWrap,
  ChangeEmailTitle,
  InputsContainer,
  FormLabelSpan,
  InputField,
  ErrorMessage,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailForm.styled';

export default function ChangeEmailForm({ onClose, callbackEmail }) {
  const initialValues = { email: '' };

  const [isUpdating, setisUpdating] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
    callbackEmail(values);
    
  };

  const FormikInput = ({ label, type, name, placeholder }) => {
    return (
      <label htmlFor={name}>
        <FormLabelSpan>{label}</FormLabelSpan>
        <InputField id={name} type={type} name={name} placeholder={placeholder} />
        <ErrorMessage name={name} component="div" />
      </label>
    );
  };

  FormikInput.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired
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
                <ChangeEmailTitle>Change email</ChangeEmailTitle>
                <InputsContainer>
                  <FormikInput
                    label="New email"
                    // type="email"
                    name="email"
                    placeholder="Enter new email"
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
                    disabled={
                      !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                    }
                  >
                    Update email
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

ChangeEmailForm.propTypes = {
  onClose: PropTypes.func.isRequired,
  callbackEmail: PropTypes.func.isRequired
};
