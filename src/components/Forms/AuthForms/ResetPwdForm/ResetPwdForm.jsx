import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { validationReserPwdRules } from '../validationRules';
import AuthInput from '../AuthInput/AuthInput';

import { Container, Title, FormElement, InputWrap, Button, Img } from '../GeneralAuth.styles';

export default function ResetPwdForm({ onSubmitForm }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);
  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('Reset Password')}</Title>
      <Formik
        validationSchema={validationReserPwdRules}
        initialValues={{ newPassword: '', confirmPassword: '' }}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validateOnMount={false}
        onSubmit={async (data) => {
          setValidateAfterSubmit(true);
          onSubmitForm(data);
          setValidateAfterSubmit(false);
        }}
      >
        {(formik) => {
          const { errors, handleSubmit, submitCount, values } = formik;

          return (
            <FormElement autoComplete="off">
              <InputWrap>
                <AuthInput
                  name="newPassword"
                  title="New password"
                  type="password"
                  placeholder="●●●●●●●"
                  id="newPassword"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.newPassword}
                />
                <AuthInput
                  name="confirmPassword"
                  title="Confirm password"
                  type="password"
                  placeholder="●●●●●●●"
                  id="confirmPassword"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.confirmPassword}
                />
              </InputWrap>
              <Button type="submit" onClick={handleSubmit}>
                {t('Reset Password')}
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

ResetPwdForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
