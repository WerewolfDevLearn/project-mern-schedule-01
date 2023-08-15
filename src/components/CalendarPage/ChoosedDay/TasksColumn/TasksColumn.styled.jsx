import { backgroundColor } from 'src/styles/variables/Variables';
import styled from 'styled-components';

export const TasksColumnStyles = styled.li`
  position: relative;

  min-width: 335px;
  height: fit-content;

  padding: 18px;
  border-radius: 8px;

  background: ${({ theme }) => theme.colors.tasksListBackground};
  border: 1px solid ${({ theme }) => theme.colors.tasksListBorder};

  @media screen and (width >= 768px) {
    min-width: 344px;
    padding: 20px;
  }
`;
