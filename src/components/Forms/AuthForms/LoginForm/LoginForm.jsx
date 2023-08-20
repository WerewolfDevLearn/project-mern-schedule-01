import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';
import AuthGoogleBtn from 'src/components/shared/AuthGoogle/AuthGoogleBtn/AuthGoogleBtn';

import { validationLoginRules } from '../validationRules';
import AuthInput from '../AuthInput/AuthInput';

import { Container, Title, FormElement, InputWrap, Button, Img } from '../GeneralAuth.styles';

export default function LoginForm({ onSubmitForm }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('Log In')}</Title>
      <Formik
        validationSchema={validationLoginRules}
        initialValues={{ email: '', password: '' }}
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
                <AuthInput
                  name="password"
                  title="Password"
                  type="password"
                  placeholder="●●●●●●●"
                  id="login_password"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.password}
                />
              </InputWrap>
              <Button type="submit" onClick={handleSubmit}>
                {t('Log in')}
                <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
      <AuthGoogleBtn title={'Log In With Google'} />
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
