import { useState } from 'react';
import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { XClose } from '../../shared/Icons';
import VerifyForm from '../VerifyForm/VerifyForm';

import {
  Modal,
  XCloseWrap,
  ChangeEmailTitle,
  InputsContainer,
  Verify,
  FormLabelSpan,
  InputField,
  ErrorMessage,
  BtnWrap,
  UpdateBtn,
  CancelBtn
} from './ChangeEmailForm.styled';

const schema = yup.object().shape({
  email: yup.string('Enter your email').email(i18n.t('Error email')).required('Email is required')
});

export default function ChangeEmailForm({ onClose }) {
  const initialValues = {};

  const [isUpdating, setisUpdating] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
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
      <Formik initialValues={initialValues} validationSchema={schema} onSubmit={handleSubmit}>
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
                    type="email"
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
                {/* <VerifyForm /> */}
                {!isUpdating && (
                  <Verify>
                    <InputsContainer>
                      <FormikInput
                        label="Verify code"
                        type="text"
                        name="verify"
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
                    </BtnWrap>
                  </Verify>
                )}
              </Modal>
            </>
          );
        }}
      </Formik>
    </>
  );
}

ChangeEmailForm.propTypes = {
  onClose: PropTypes.func.isRequired
};
