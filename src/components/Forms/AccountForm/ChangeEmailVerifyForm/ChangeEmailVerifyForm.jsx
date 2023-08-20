import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { validationChangeEmailRules } from '../accountValidationRules';

import {
  Modal,
  InputsContainer,
  FormLabelSpan,
  InputField,
  ErrorMessage,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailForm.styled';

export default function ChangeEmailForm({ onClose, callbackEmail }) {
  const initialValues = { code: '' };

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
                {/* {!isUpdating && ( */}
                <Verify>
                  <InputsContainer>
                    <FormikInput
                      label="Verify code"
                      type="text"
                      name="code"
                      placeholder="Enter verify code"
                    />
                  </InputsContainer>
                  <BtnWrap>
                    <UpdateBtn
                      type="submit"
                      disabled={
                        !formik.isValid || !formik.touched || formik.isSubmitting || !formik.dirty
                      }
                    >
                      Verify
                    </UpdateBtn>
                    <CancelBtn type="button" onClick={onClose}>
                      Cancel
                    </CancelBtn>
                  </BtnWrap>
                </Verify>
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
  callbackEmail: PropTypes.func.isRequired
};
