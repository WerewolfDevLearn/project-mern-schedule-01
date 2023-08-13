import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';

import { validationLoingRules } from '../validationRules';

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
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={onSubmit}
      >
        {() => (
          <FormElement autoComplete="off">
            <InputWrap>
              <Subtitle htmlFor="email">
                Email
                <Input type="email" name="email" placeholder="nadiia@gmail.com" id="login_email" />
                <ErrorText name="email" component="p" />
              </Subtitle>

              <Subtitle htmlFor="password">
                Password
                <Input type="password" name="password" placeholder="●●●●●●●" id="login_password" />
                <ErrorText name="password" component="p" />
              </Subtitle>
            </InputWrap>

            <Button type="submit">
              Log in
              <Img src={icon} alt="LogIn SVG" />
            </Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
}

LoginForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
