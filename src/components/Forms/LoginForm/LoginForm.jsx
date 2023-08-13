import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';

import { validationLoginRules } from '../validationRules';

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
} from './LoginForm.styled';

export default function LoginForm({ onSubmitForm }) {
  const { t } = useTranslation();

  const onSubmit = (data, { resetForm }) => {
    onSubmitForm(data);
    resetForm();
  };

  return (
    <Container>
      <Title>{t('Log In')}</Title>

      <Formik
        validationSchema={validationLoginRules}
        initialValues={{ email: '', password: '' }}
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
                <Subtitle htmlFor="email" className={validateInput('email')}>
                  {t('Email')}
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('nadiia@gmail.com')}
                    id="login_email"
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
                    placeholder="●●●●●●●"
                    id="login_password"
                    className={validateInput('password')}
                  />
                  {validateInput('password') === 'input-correct' && (
                    <TextCorrect>This is an CORRECT password</TextCorrect>
                  )}
                  <ErrorText name="password" component="p" />
                </Subtitle>
              </InputWrap>

              <Button type="submit">
                {t('Log in')}
                <Img src={icon} alt="LogIn SVG" />
              </Button>
            </FormElement>
          );
        }}
      </Formik>
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
