import styled from 'styled-components';
import { Field, Form, ErrorMessage as FormikErrorMessage } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const Modal = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 550px;
    height: 350px;
    border-radius: 16px;
  }
`;

export const XCloseWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`;

export const ChangeEmailTitle = styled.h1`
  margin-bottom: 30px;
  text-align: center;
  color: #3e85f3;
`;

export const InputsContainer = styled.div`
  margin-bottom: 30px;
`;

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

  &:hover,
  &:focus {
    border: 1px solid black;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  padding-left: 18px;
  color: red;
`;

export const BtnWrap = styled.div`
  display: flex;
`;

export const UpdateBtn = styled.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #2b78ef;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  /* border: 3px solid #3e85f3; */
  margin-left: 100px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #2b78ef;
  }
`;
