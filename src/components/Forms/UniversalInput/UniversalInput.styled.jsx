import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
`;

export const InputField = styled(Field)`
  width: 354px;
  height: 46px;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;

  &:hover {
    border: 1px solid black;
  }

  &.input-error {
    border: 1px solid ${themes.colors.failed};
  }

  &.input-correct {
    border: 1px solid ${themes.colors.saccess};
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  color: #da1414;
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;

  left: 14px;
  bottom: -18px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    font-size: ${themes.fontSizes.s};
    left: 18px;
  }
`;
