import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { themes } from 'src/styles/variables/themes';

export const FormContainer = styled.div`
  padding: 0 18px 40px 18px;
  background-color: white;
  border-radius: 16px;
  position: relative;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    padding: 40px 175px 40px 175px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding: 60px 165px 60px 164px;
  }
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserNameTitle = styled.h2`
  margin: 0;
  margin-bottom: 4px;

  @media screen and (${themes.breakpoints.l} < width) {
    margin-bottom: 8px;
  }
`;

export const RoleTitle = styled.p`
  font-size: 12px;
  font-weight: 600;
  line-height: 1.17;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: #343434;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    font-size: 14px;
    font-weight: 600;
    line-height: 1.29;
    letter-spacing: -0.02em;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    margin-bottom: 44px;
  }
`;

export const FormInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    gap: 16px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px 50px;
    /* padding: 44px 0 88px 0; */
    width: 758px;
    position: relative;
  }
`;

export const FormLabelSpan = styled.span`
  display: flex;
  margin-bottom: 8px;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: -0.02em;
  /* margin-top: 16px; */
  color: #111111;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    font-size: 14px;
    line-height: 1.29;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
  }
`;

export const InputField = styled(Field)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  color: #111111;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;
  margin-bottom: 8px;
  width: 200px;

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border: 1px solid rgba(17, 17, 17, 15%);
    border-radius: 8px;
    padding: 0 18px;
    margin-bottom: 8px;

    &:hover {
      border: 1px solid black;
    }
  }
`;

export const DateInput = styled(DatePicker)`
  font-size: 14px;
  line-height: 1.29;
  font-weight: 600;
  letter-spacing: -0.02em;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  margin-bottom: 8px;
  padding: 0 18px;
  color: #111111;
  width: 200px;

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
    width: 299px;
    height: 42px;
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    font-size: 16px;
    line-height: 1.13;
    width: 354px;
    height: 46px;
    border: 1px solid rgba(17, 17, 17, 15%);
    border-radius: 8px;
    padding: 0 18px;

    &:hover {
      border: 1px solid black;
    }
  }

  @media screen and (${themes.breakpoints.l} <= width) {
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  padding-left: 14px;
  color: red;
  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
  }

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    padding-left: 18px;
  }
`;

export const ModalWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormBtn = styled.button`
  width: 195px;
  height: 46px;
  font-family: Inter;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.29;
  letter-spacing: -0.02em;
  margin-top: 32px;
  margin-bottom: 60px;
  border-radius: 16px;
  color: white; //  color: ${({ theme }) => theme.colors.white};
  background-color: #3e85f3; //  background-color: ${({ theme }) => theme.colors.activeUserNavIcon};
  text-shadow: 0px 47px 355px rgba(0, 0, 0, 0.07), 0px 9.4px 57.6875px rgba(0, 0, 0, 0.035);
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

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 262px;
    height: 48px;
    margin-top: 80px;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    /* gap: 10px; */
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    bottom: 8%;
    right: -8%;
    gap: 20px;
  }
`;

export const ChangeValueBtnWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
    flex-direction: row;
  }

  @media screen and (${themes.breakpoints.l} <= width) {
    flex-direction: row;
    gap: 20px;
  }
`;
