import { Formik, Form } from 'formik';
import PropTypes from 'prop-types';
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

const schema = yup.object().shape({});

export default function ChangePasswordForm({ onClose }) {
  const initialValues = {};
  const handleSubmit = (values) => {
    console.log(values);
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
                  <PasswordInput
                    formik={formik}
                    label="Old password"
                    name="old password"
                    placeholder="Password"
                  />
                  <PasswordInput
                    formik={formik}
                    label="New password"
                    name="new password"
                    placeholder="Password"
                  />
                  <PasswordInput
                    formik={formik}
                    label="Confirm new password"
                    name="confirm new password"
                    placeholder="Confirm"
                  />
                </InputsContainer>
                <BtnWrap>
                  <UpdateBtn
                    type="submit"
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
