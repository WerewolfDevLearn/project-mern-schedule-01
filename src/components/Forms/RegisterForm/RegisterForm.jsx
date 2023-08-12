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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {() => (
          <FormElement autoComplete="off">
            <InputWrap>
              <Subtitle htmlFor="name">
                Name
                <Input type="name" name="name" placeholder="Enter your name" id="signup_name" />
                <ErrorText name="name" component="p" />
              </Subtitle>

              <Subtitle htmlFor="email">
                Email
                <Input type="email" name="email" placeholder="Enter email" id="signup_email" />
                <ErrorText name="email" component="p" />
              </Subtitle>

              <Subtitle htmlFor="password">
                Password
                <Input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  id="signup_password"
                />
                <ErrorText name="password" component="p" />
              </Subtitle>
            </InputWrap>

            <Button type="submit">Sign Up</Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
}

RegisterForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};