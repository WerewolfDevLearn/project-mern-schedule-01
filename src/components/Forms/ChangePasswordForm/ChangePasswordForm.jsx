import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';

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

const schema = yup.object().shape({});

export default function ChangePasswordForm({ onClose }) {
  const initialValues = {};
  const handleSubmit = (values) => {
    // console.log(values);
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
                <ChangePasswordTitle>Change password</ChangePasswordTitle>
                <InputsContainer>
                  <FormikInput
                    label="Old password"
                    type="password"
                    name="old password"
                    placeholder="Password"
                  />
                  <FormikInput
                    label="New password"
                    type="password"
                    name="new password"
                    placeholder="Password"
                  />
                  <FormikInput
                    label="Confirm new password"
                    type="password"
                    name="confirm new password"
                    placeholder="Confirm"
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn type="submit">Update password</UpdateBtn>
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
