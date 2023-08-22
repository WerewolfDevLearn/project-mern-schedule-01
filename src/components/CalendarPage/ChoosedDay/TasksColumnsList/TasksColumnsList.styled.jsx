import styled from 'styled-components';

export const TasksColumnsListStyles = styled.ul`
  display: flex;
  gap: 8px;

  @media screen and (width >= 768px) {
    gap: 16px;
    justify-content: space-between;
  }

  @media screen and (width >= 1440px) {
    justify-content: space-between;
  }
`;
