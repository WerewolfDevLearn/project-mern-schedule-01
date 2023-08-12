import styled from 'styled-components';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const FormContainer = styled.div`
  padding: 60px 165px 60px 164px;
`;

export const FormWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const AvatarAddIcon = styled.div`
  display: inline-flex;
  position: absolute;
  top: 77%;
  left: 76%;
  background-color: #3e85f3;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
    background-color: #2b78ef;
  }
`;

export const AvatarInputField = styled.input`
  visibility: hidden;
`;

export const AvatarImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: 62px;
  height: 62px;
  border: 2px solid blue; */
`;

export const AvatarImg = styled.img`
  width: 124px;
  height: 124px;
  border: 2px solid #3e85f3;
  border-radius: 50%;
  background-size: center;
`;

export const UserNameTitle = styled.h2`
  margin: 0;
`;

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 44px 0 88px 0;
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

  &:hover {
    border: 1px solid black;
  }
`;

export const DateInput = styled(DatePicker)`
  width: 354px;
  height: 46px;
  box-sizing: border-box;
  border: 1px solid rgba(17, 17, 17, 15%);
  border-radius: 8px;
  padding: 0 18px;

  &:hover {
    border: 1px solid black;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  font-size: 12px;
  padding-left: 18px;
  color: red;
`;

export const FormBtn = styled.button`
  width: 262px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 80%;
  left: 70%;

  /* bottom: 24%;
  right: 10%; */
`;

export const ChangePassBtn = styled.button`
  width: 172px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  margin-bottom: 10px;

  &:hover {
    background-color: #2b78ef;
  }
`;

export const DeleteProfileBtn = styled.button`
  width: 172px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #fad91b;

  &:hover {
    background-color: red;
  }
`;
