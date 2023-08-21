import styled from 'styled-components';

export const TasksColumnStyles = styled.li`
  position: relative;
  scroll-snap-align: center;

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
