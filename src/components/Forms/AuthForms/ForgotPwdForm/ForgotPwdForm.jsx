import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { validationLoginRules } from '../validationRules';
import AuthInput from '../AuthInput/AuthInput';

import { Container, Title, FormElement, InputWrap, Button, Img } from '../GeneralAuth.styles';

export default function ForgotPwdForm({ onSubmitForm }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('Forgot password')}</Title>
      <Formik
        validationSchema={validationLoginRules}
        initialValues={{ email: '' }}
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
                  name="email"
                  title="Email"
                  type="email"
                  placeholder="nadiia@gmail.com"
                  id="login_email"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.email}
                />
              </InputWrap>
              <Button type="submit" onClick={handleSubmit}>
                {t('Forgot password')}
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

ForgotPwdForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
