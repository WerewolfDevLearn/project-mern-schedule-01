import styled from 'styled-components';

export const ColumnHeadBarStyles = styled.div`
  margin-bottom: 42px;

  display: flex;
  justify-content: space-between;
`;

export const TodoTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;

export const AddBtn = styled.button`
  width: 22px;
  color: ${({ theme }) => theme.colors.textAndIconTodo};
`;
