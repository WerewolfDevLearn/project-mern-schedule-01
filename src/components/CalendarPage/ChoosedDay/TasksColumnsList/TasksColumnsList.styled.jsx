import styled from 'styled-components';

export const TasksColumnsListStyles = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (width >= 768px) {
    gap: 16px;
  }

  @media screen and (width >= 1440px) {
    gap: 27px;
  }
`;
