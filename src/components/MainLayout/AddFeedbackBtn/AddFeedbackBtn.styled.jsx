import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const AddFeedbackBtnStyles = styled.button`
  display: block;
  padding: 8px 20px;
  border-radius: 10px;
  margin-left: auto;
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
  @media screen and (${themes.breakpoints.s} < width) {
    padding: 12px 32px;
    font-size: 14px;
    font-weight: 600;
    line-height: 1.28;
    text-align: center;
    border-radius: 14px;
    margin-right: 24px;
  }

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
