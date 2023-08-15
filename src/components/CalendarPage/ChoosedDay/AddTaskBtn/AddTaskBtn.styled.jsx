import styled from 'styled-components';

export const AddTaskBtnStyles = styled.button`
  ${(props) => (props.count > 2 ? 'position: absolute;' : 'position: static;')};
  bottom: 10px;

  width: 100%;
  max-width: 299px;
  padding: 12px;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};
  background: ${({ theme }) => theme.colors.backColorBtnAddTask};
  border: 1px dashed ${({ theme }) => theme.colors.borderBtnAddTask};

  font-family: 'Inter';
  font-size: 14px;
  font-weight: 600;
  line-height: 18px;

  @media screen and (width >= 768px) {
    max-width: 304px;
    position: static;
    margin-top: 32px;
  }
`;

export const PlusIcon = styled.img`
  width: 24px;
  height: 24px;
`;
