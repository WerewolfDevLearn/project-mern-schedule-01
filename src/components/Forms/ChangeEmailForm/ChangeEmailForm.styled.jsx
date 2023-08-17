import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 550px;
  height: 550px;
  border-radius: 16px;
  background-color: #edf0f8;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;
`;

export const XCloseWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3%;
  right: 3%;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover {
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

export const Verify = styled.div``;

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
`;

// export const CloseBtn = styled.button`
//   width: 100px;
//   height: 48px;
//   border-radius: 16px;
//   color: white;
//   background-color: #3e85f3;
//   /* border: 3px solid #3e85f3; */
//   margin-left: 100px;
//   margin-bottom: 10px;

// transform: scale(1);
//   transition-property: transform;
//   transition-duration: 250ms;
//   transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

//   &:hover {
//     border: none;
//     color: white;
//     background-color: #2b78ef;
//   }
// `;
