import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';
// import eyeOn from 'src/images/svg/eye-show.svg';
// import eyeOff from 'src/images/svg/eye-off.svg';
import AuthGoogleBtn from 'src/components/shared/AuthGoogle/AuthGoogleBtn/AuthGoogleBtn';

import { validationRegisterRules } from '../validationRules';
import AuthInput from '../AuthInput/AuthInput';

import { Container, Title, FormElement, InputWrap, Button, Img } from './RegisterForm.styled';

export default function RegisterForm({ callBack }) {
  // const [passwordShown, setPasswordShown] = useState(false);
  const [validateAfterSubmit, setValidateAfterSubmit] = useState(false);

  const { t } = useTranslation();

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };

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
                {/* ================ */}
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
                {/* ================ */}
                {/*
                <Subtitle htmlFor="password" className={validateInput('password')}>
                  {t('Password')}
                  <InputContainer>
                    {' '}
                    <Input
                      type={passwordShown ? 'text' : 'password'}
                      name="password"
                      placeholder={t('Enter password')}
                      id="signup_password"
                      className={validateInput('password')}
                    />
                    <button type="button" onClick={togglePassword}>
                      <SvgEye
                        src={passwordShown ? eyeOff : eyeOn}
                        alt="Success Icon"
                        className={validateInput('password') !== '' ? 'right' : 'left'}
                      />
                    </button>
                    {validateInput('password') === 'input-correct' && (
                      <SvgValidate src={iconSuccess} alt="Success Icon" />
                    )}
                    {validateInput('password') === 'input-error' && (
                      <SvgValidate src={iconError} alt="Error Icon" />
                    )}
                  </InputContainer>

                  {validateInput('password') === 'input-correct' && (
                    <TextCorrect>{t('Correct password')}</TextCorrect>
                  )}
                  <ErrorText name="password" component="p" />
                </Subtitle> */}
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
