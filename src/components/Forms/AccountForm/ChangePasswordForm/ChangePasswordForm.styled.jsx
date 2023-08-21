import styled from 'styled-components';
import { Form } from 'formik';
import { themes } from 'src/styles/variables/themes';

export const Modal = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  background: ${({ theme }) => theme.colors.backgroundUserForm};
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 550px;
    height: 450px;
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
  color: ${({ theme }) => theme.colors.placeholder};

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: #cf0202;
  }
`;

export const ChangePasswordTitle = styled.h1`
  text-align: center;
  color: #3e85f3;

  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 30px;
  }
`;

export const InputsContainer = styled.div`
  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 40px;
  }
`;

export const InputWrap = styled.div`
  margin-bottom: 30px;

  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 0px;
  }
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
  margin-left: 30px;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    color: white;
    background-color: #2b78ef;
    transform: scale(1.1);
  }
`;
