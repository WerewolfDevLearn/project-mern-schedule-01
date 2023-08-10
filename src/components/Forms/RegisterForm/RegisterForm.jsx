import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { registerSchema } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
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
        validationSchema={registerSchema}
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <FormElement autoComplete="off">
            <Subtitle htmlFor="name">Name</Subtitle>
            <Input type="name" name="name" placeholder="Enter your name" id="signup_name" />
            <ErrorText name="name" component="p" />

            <Subtitle htmlFor="email">Email</Subtitle>
            <Input type="email" name="email" placeholder="Enter email" id="signup_email" />
            <ErrorText name="email" component="p" />

            <Subtitle htmlFor="password">Password</Subtitle>
            <Input
              type="password"
              name="password"
              placeholder="Enter password"
              id="signup_password"
            />

            <ErrorText name="password" component="p" />

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
