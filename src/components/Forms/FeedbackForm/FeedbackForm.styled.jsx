import { backgroundColor, colorText } from 'src/styles/variables/Variables';
import styled from 'styled-components';
import { XClose, Pencil, Trash, RatingStar } from 'src/components/shared/Icons';
import { Field, ErrorMessage as FormikErrorMessage } from 'formik';

export const FeedbackFormStyles = styled.div`
  width: calc(100vw - 32px);
  max-width: 468px;
  padding: 32px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.backgroundModalTodo};

  border: 1px solid rgba(220, 227, 229, 0.8);
  box-shadow: 0px 4px 57px 0px rgba(17, 17, 17, 0.05);
`;

export const Label = styled.label`
  &:not(:nth-child(2)) {
    margin-bottom: 24px;
  }

  display: flex;
  flex-direction: column;
  gap: 8px;

  color: ${({ theme }) => theme.colors.labelInForm};
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
`;

export const LabelInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const ReviewActions = styled.div`
  display: flex;
  gap: 8px;
`;

export const RatingStarActive = styled(RatingStar)`
  color: #ffac33;
`;

export const RatingStarDisable = styled(RatingStar)`
  color: ${({ theme }) => theme.colors.starDisable};
`;

export const EditBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(62, 134, 243, 0.169);
`;

export const RemoveBtn = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(234, 61, 101, 0.2);
`;

export const PencilIcon = styled(Pencil)`
  width: 16px;
  height: 16px;

  color: ${colorText.blue1};
`;

export const TrashIcon = styled(Trash)`
  width: 16px;
  height: 16px;

  color: #ea3d65;
`;

export const ButtonCloseWrap = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;

  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;

  background-color: transparent;
  cursor: pointer;
`;

export const CloseIcon = styled(XClose)`
  width: 24px;
  height: 24px;

  transition: stroke 250ms linear;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;

export const InputReview = styled(Field)`
  width: 100%;
  height: 127px;
  padding: 14px 18px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background: ${({ theme }) => theme.colors.backgroundTextArea};
  border: 1px solid rgba(255, 255, 255, 0.15);

  resize: none;

  &:focus {
    outline: transparent;
  }

  &::placeholder {
    color: #343434;
  }
`;

export const ErrorMessage = styled(FormikErrorMessage)`
  margin-left: 18px;
  max-width: 100%;
  color: #da1414;
  font-size: 12px;
  font-family: Inter;
  line-height: 14px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 18px;
`;

export const ButtonAction = styled.button`
  width: 198px;
  height: 48px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  color: ${colorText.white};
  background-color: ${backgroundColor.primaryBlue};
`;

export const ButtonCancel = styled.button`
  width: 198px;
  height: 48px;
  border-radius: 8px;

  font-size: 14px;
  font-weight: 600;

  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background-color: ${({ theme }) => theme.colors.canceled};
`;
