import { useState } from 'react';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import UniversalInput from '../../UniversalInput/UniversalInput';
import { validationChangeEmailRules } from '../accountValidationRules';

import { Modal, InputsContainer, BtnWrap, UpdateBtn, CancelBtn } from './ChangeEmailForm.styled';

export default function ChangeEmailForm({ onClose, callbackEmail }) {
  const initialValues = { code: '' };

  const [isUpdating, setisUpdating] = useState(false);

  const handleSubmit = (values) => {
    console.log(values);
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
                {/* {!isUpdating && ( */}
                {/* <Verify> */}
                <InputsContainer>
                  <UniversalInput
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
                {/* </Verify> */}
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
