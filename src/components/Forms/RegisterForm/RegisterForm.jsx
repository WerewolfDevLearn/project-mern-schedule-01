import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { validationRegisterRules } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
  InputWrap,
  Subtitle,
  Input,
  ErrorText,
  Button
} from './RegisterForm.styled';

export default function RegisterForm({ onSubmitForm }) {
  const onSubmit = (data, { resetForm }) => {
    onSubmitForm(data);
    resetForm();
  };

  return (
    <Container>
      <Title>Sign Up</Title>
      <Formik
        validationSchema={validationRegisterRules}
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <FormElement autoComplete="off">
            <InputWrap>
              <Subtitle htmlFor="name">
                Name
                <Input type="name" name="name" placeholder="Enter your name" id="signup_name" />
              </Subtitle>
              <ErrorText name="name" component="p" />

              <Subtitle htmlFor="email">
                Email
                <Input type="email" name="email" placeholder="Enter email" id="signup_email" />
              </Subtitle>
              <ErrorText name="email" component="p" />

              <Subtitle htmlFor="password">
                Password
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  id="signup_password"
                />
              </Subtitle>
              <ErrorText name="password" component="p" />
            </InputWrap>

            <Button type="submit" disabled={!isValid}>
              Sign Up
            </Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
}

RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
