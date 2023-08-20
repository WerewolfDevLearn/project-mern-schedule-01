import styled from 'styled-components';

export const TaskToolbarStyles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
`;

export const TaskToolbarBtn = styled.button`
  width: 14px;
  height: 14px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};

  transition: color 100ms linear;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const PopoverWrapper = styled.div`
  /* padding: 20px 24px; */
  border-radius: 8px;
  z-index: 2;

  display: flex;
  flex-direction: column;
  /* gap: 18px; */

  overflow: hidden;

  background: ${({ theme }) => theme.colors.backgroundModalTodo};
  border: 1px solid ${({ theme }) => theme.colors.tasksListBorder};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const RelocateButton = styled.button`
  padding: 20px 24px 7px 24px;

  &:last-child {
    padding: 7px 24px 20px 24px;
  }

  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;

  color: ${({ theme }) => theme.colors.textAndIconTodo};

  &:hover {
    background-color: #7e7e7e10;
  }
`;
