import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: orange;
`;

export const FormElement = styled(Form)`
  color: red;
`;

export const Subtitle = styled.label`
  color: brown;
`;

export const Input = styled(Field)`
  color: green;
  display: block;
`;

export const ErrorText = styled(ErrorMessage)`
  color: darkblue;
  display: block;
`;

export const Button = styled.button`
  background-color: aquamarine;
`;
