import { Formik, Form } from 'formik';
import { PropTypes } from 'prop-types';
import * as yup from 'yup';
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { XClose } from '../../shared/Icons';
import {
  Modal,
  XCloseWrap,
  ChangeEmailTitle,
  //   InputsContainer,
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
    // label: PropTypes.string.isRequired,
    // type: PropTypes.string.isRequired,
    // name: PropTypes.string.isRequired,
    // placeholder: PropTypes.string.isRequired
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
                <FormikInput
                  label="New password"
                  type="email"
                  name="email"
                  placeholder="Enter new email"
                />
                <UpdateBtn type="submit">Update email</UpdateBtn>
                <FormikInput
                  label="Verify code"
                  type="number"
                  name="verify"
                  placeholder="Enter verify code"
                />
                <BtnWrap>
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
