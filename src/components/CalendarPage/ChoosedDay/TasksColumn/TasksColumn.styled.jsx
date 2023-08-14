import { backgroundColor } from 'src/styles/variables/Variables';
import styled from 'styled-components';

export const TasksColumnStyles = styled.li`
  position: relative;

  min-width: 335px;
  height: fit-content;

  padding: 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  background-color: ${backgroundColor.white};

  @media screen and (width >= 768px) {
    min-width: 344px;
    padding: 20px;
  }
`;
