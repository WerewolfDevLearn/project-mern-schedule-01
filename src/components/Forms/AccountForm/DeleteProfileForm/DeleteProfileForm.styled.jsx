import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  position: relative;
  background-color: white;
  box-shadow: rgb(0, 0, 0) 0px 0px 80px;

  @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
  }

  @media screen and (${themes.breakpoints.m} <= width) {
    width: 550px;
    height: 550px;
    border-radius: 16px;
  }

  /* @media screen and (${themes.breakpoints.s} <= width < ${themes.breakpoints.m}) {
  }

  @media screen and (${themes.breakpoints.m} <= width < ${themes.breakpoints.l}) {
  }

  @media screen and (${themes.breakpoints.l} <= width) {
  } */
`;

export const XCloseWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 10px;

  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover {
    color: #cf0202;
  }
`;

export const ValidationErrorWrap = styled.div`
  color: #cf0202;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  margin-bottom: 30px;

  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`;

export const Description = styled.p`
  margin-bottom: 60px;

  @media screen and (${themes.breakpoints.m} <= width) {
    margin-bottom: 20px;
  }
`;

export const InputWrap = styled.label`
  margin-bottom: 40px;
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 20px;

  @media screen and (${themes.breakpoints.m} <= width) {
    gap: 50px;
  }
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 48px;
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
    color: white;
    background-color: #2b78ef;
    transform: scale(1.1);
  }
`;

export const DeleteBtn = styled.button`
  width: 152px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #cf0202;
  margin-bottom: 10px;

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  &:hover,
  &:focus {
    background-color: #bb0202;
    transform: scale(1.1);
  }

  &:disabled {
    transform: none;
    background-color: #8fc2fc;
    cursor: not-allowed;
  }
`;
