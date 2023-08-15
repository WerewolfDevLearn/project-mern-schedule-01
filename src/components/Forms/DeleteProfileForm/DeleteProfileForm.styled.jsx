import styled from 'styled-components';

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 550px;
  height: 550px;
  /* border: 5px solid #3e85f3; */
  border-radius: 16px;
  background-color: #edf0f8;
`;

export const XCloseWrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 3%;
  right: 3%;

  &:hover {
    color: #cf0202;
  }
`;

export const ValidationErrorWrap = styled.div`
  color: #cf0202;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const Description = styled.p`
  margin-bottom: 20px;
`;

export const InputWrap = styled.label`
  margin-bottom: 40px;
`;

export const BtnWrap = styled.div`
  display: flex;
`;

export const CancelBtn = styled.button`
  width: 100px;
  height: 48px;
  border-radius: 16px;
  color: white;
  background-color: #3e85f3;
  /* border: 3px solid #3e85f3; */
  margin-bottom: 10px;

  &:hover {
    border: none;
    color: white;
    background-color: #2b78ef;
  }
`;

export const DeleteBtn = styled.button`
  width: 152px;
  height: 48px;
  border: none;
  border-radius: 16px;
  color: white;
  background-color: #cf0202;
  margin-left: 50px;
  margin-bottom: 10px;

  &:hover {
    background-color: #bb0202;
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;
