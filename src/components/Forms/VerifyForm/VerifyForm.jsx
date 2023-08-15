// import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import PropTypes from 'prop-types';
import icon from 'src/images/svg/login.svg';

import {
  Container,
  Title,
  FormElement,
  InputWrap,
  Subtitle,
  Input,
  Button,
  Img
} from './VerifyForm.styled';

export default function VerifyForm({ onSubmitForm }) {
  const onSubmit = (data) => {
    onSubmitForm(data);
  };

  return (
    <Container>
      <Title>Verify</Title>
      <Formik initialValues={{ code: '' }} onSubmit={onSubmit}>
        {() => (
          <FormElement autoComplete="off">
            <InputWrap>
              <Subtitle htmlFor="code">Code</Subtitle>
              <Input type="text" name="code" placeholder="Enter your code" />
            </InputWrap>
            <Button type="submit">
              Confirm <Img src={icon} alt="LogIn SVG" />
            </Button>
          </FormElement>
        )}
      </Formik>
    </Container>
  );
}

VerifyForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired
};
