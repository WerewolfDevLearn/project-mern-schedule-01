import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';

import { validationRegisterRules } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
  InputWrap,
  Subtitle,
  Input,
  ErrorText,
  TextCorrect,
  Button,
  Img
} from './RegisterForm.styled';

export default function RegisterForm({ onSubmitForm }) {
  const { t } = useTranslation();

  const onSubmit = (data, { resetForm }) => {
    onSubmitForm(data);
    resetForm();
  };

  return (
    <Container>
      <Title>{t('Sign Up')}</Title>
     
      <Formik
        validationSchema={validationRegisterRules}
        initialValues={{ name: '', email: '', password: '' }}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, touched } = formik;

          const validateInput = (input) =>
            touched[input] && errors[input] ? 'input-error' : touched[input] ? 'input-correct' : '';

          return (
            <FormElement autoComplete="off">
              <InputWrap>
                <Subtitle htmlFor="name" className={validateInput('name')}>
                  {t('Name')}
                  <Input
                    type="name"
                    name="name"
                    placeholder={t('Enter your name')}
                    id="signup_name"
                    className={validateInput('name')}
                  />
                  {validateInput('name') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT name</TextCorrect>
                  )}
                  <ErrorText name="name" component="p" />
                </Subtitle>

                <Subtitle htmlFor="email" className={validateInput('email')}>
                  {t('Email')}
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('Enter email')}
                    id="signup_email"
                    className={validateInput('email')}
                  />
                  {validateInput('email') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT email</TextCorrect>
                  )}
                  <ErrorText name="email" component="p" />
                </Subtitle>

                <Subtitle htmlFor="password" className={validateInput('password')}>
                  {t('Password')}
                  <Input
                    type="password"
                    name="password"
                    placeholder={t('Enter password')}
                    id="signup_password"
                    className={validateInput('password')}
                  />
                  {validateInput('password') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT password</TextCorrect>
                  )}
                  <ErrorText name="password" component="p" />
                </Subtitle>
              </InputWrap>

              <Button type="submit">
                {t('Sign Up')} <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
