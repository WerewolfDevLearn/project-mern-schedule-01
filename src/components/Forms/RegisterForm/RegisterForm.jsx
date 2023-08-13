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
        validateOnChange={false}
        validateOnBlur={false}
        validateOnMount={false}
        onSubmit={onSubmit}
      >
        {(formik) => {
          const { errors, touched } = formik;
          return (
            <FormElement autoComplete="off">
              <InputWrap>
                <Subtitle htmlFor="name">
                  {t('Name')}
                  <Input
                    type="name"
                    name="name"
                    placeholder={t('Enter your name')}
                    id="signup_name"
                  />
                  <ErrorText name="name" component="p" />
                </Subtitle>

                <Subtitle htmlFor="email">
                  {t('Email')}
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('Enter email')}
                    id="signup_email"
                  />
                  <ErrorText name="email" component="p" />
                </Subtitle>

                <Subtitle htmlFor="password">
                  {t('Password')}
                  <Input
                    type="password"
                    name="password"
                    placeholder={t('Enter password')}
                    id="signup_password"
                  />
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
