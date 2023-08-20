import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';
import AuthGoogleBtn from 'src/components/shared/AuthGoogle/AuthGoogleBtn/AuthGoogleBtn';

import { validationRegisterRules } from '../validationRules';
import AuthInput from '../AuthInput/AuthInput';

import { Container, Title, FormElement, InputWrap, Button, Img } from './RegisterForm.styled';

export default function RegisterForm({ callBack }) {
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { t } = useTranslation();

  return (
    <Container>
      <Title>{t('Sign Up')}</Title>

      <Formik
        validationSchema={validationRegisterRules}
        initialValues={{ name: '', email: '', password: '' }}
        validateOnBlur={false}
        validateOnChange={validateAfterSubmit}
        validateOnMount={false}
        onSubmit={(data) => {
          setValidateAfterSubmit(true);
          callBack(data);
          setValidateAfterSubmit(false);
        }}
      >
        {(formik) => {
          const { errors, handleSubmit, submitCount, values } = formik;

          return (
            <FormElement autoComplete="off">
              <InputWrap>
                <AuthInput
                  name="name"
                  title="Name"
                  type="text"
                  placeholder="Enter your name"
                  id="signup_name"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.name}
                />
                <AuthInput
                  name="email"
                  title="Email"
                  type="email"
                  placeholder="Enter email"
                  id="signup_email"
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
                  placeholder="Enter password"
                  id="signup_password"
                  validateAfterSubmit={validateAfterSubmit}
                  submitCount={submitCount}
                  errors={errors}
                  setValidateAfterSubmit={setValidateAfterSubmit}
                  values={values.password}
                />
              </InputWrap>
              <Button type="submit" onClick={handleSubmit}>
                {t('Sign Up')} <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
      <AuthGoogleBtn title={'Sign Up With Google'} />
    </Container>
  );
}

RegisterForm.propTypes = {
  callBack: PropTypes.func.isRequired
};
