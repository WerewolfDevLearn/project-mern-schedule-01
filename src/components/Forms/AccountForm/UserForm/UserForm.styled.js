import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { themes } from 'src/styles/variables/themes';

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UserNameTitle = styled.h2`
  margin: 0;
  margin-bottom: 4px;

  @media screen and (${themes.breakpoints.l} <= width) {
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

  @media screen and (${themes.breakpoints.m} <= width) {
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
    width: 758px;
    position: relative;
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
