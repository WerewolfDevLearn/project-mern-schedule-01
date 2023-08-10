import { Formik } from 'formik';
import PropTypes from 'prop-types';

import { validationLoingRules } from '../validationRules';

import {
  Container,
  Title,
  FormElement,
  Subtitle,
  Input,
  ErrorText,
  Button
} from './LoginForm.styled';

export default function LoginForm({ onSubmitForm }) {
  const onSubmit = (data, { resetForm }) => {
    onSubmitForm(data);
    resetForm();
  };

  return (
    <Container>
      <Title>Log In</Title>

      <Formik
        validationSchema={validationLoingRules}
        initialValues={{ email: '', password: '' }}
        onSubmit={onSubmit}
      >
        {({ isValid }) => (
          <FormElement autoComplete="off">
            <Subtitle htmlFor="email">Email</Subtitle>
            <Input type="email" name="email" placeholder="nadiia@gmail.com" id="login_email" />
            <ErrorText name="email" component="p" />

            <Subtitle htmlFor="password">Password</Subtitle>
            <Input type="password" name="password" placeholder="******" id="login_password" />
            <ErrorText name="password" component="p" />

            <Button type="submit">Log in</Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
