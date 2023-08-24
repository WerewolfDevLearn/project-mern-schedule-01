import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.placeholder};
`;

export const InputField = styled(Field)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  width: 199px;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  border-width: 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.borderInputUserForm};
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  background: transparent;

  &:hover {
    border: 1px solid black;
  }

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;
  }

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:hover::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.colors.backgroundUserForm} inset !important;
  }

  &:-webkit-autofill::first-line {
    color: ${({ theme }) => theme.colors.textCancelBtn} !important;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.r};
  line-height: 14px;
  padding-left: 14px;
  color: red;

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;
