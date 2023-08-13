import styled from 'styled-components';

export const AddFeedbackBtnStyles = styled.button`
  display: block;
  padding: 8px 20px;
  border-radius: 10px;
  margin-right: 18px;
  background: ${({ theme }) => theme.colors.borderBtnAddTask};
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);

  transform: scale(1);
  transition-property: transform;
  transition-duration: 250ms;
  transition-timing-function: cubic-bezier(0, 0.11, 0.35, 2);

  color: ${({ theme }) => theme.colors.white};
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    padding: 16px;
    font-size: 18px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
