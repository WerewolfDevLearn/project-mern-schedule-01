import styled from 'styled-components';
import { Form, Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputField = styled(Field)`
  width: 354px;
  height: 46px;
  border-width: 1px;
  border-style: solid;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  border-color: ${({ theme }) => theme.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  background: ${({ theme }) => theme.colors.backgroundUserForm};

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

export const TextCorrect = styled.p`
  color: ${themes.colors.saccess};
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

export const SvgValidate = styled.img`
  position: absolute;
  right: 18px;
  bottom: 11px;
  width: 24px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    bottom: 18px;
  }
`;

export const SvgEye = styled.img`
  position: absolute;
  right: 46px;
  bottom: 17px;
  width: 24px;

  &.left {
    right: 18px;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    bottom: 18px;
  }
`;
