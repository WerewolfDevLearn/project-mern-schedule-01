import styled from 'styled-components';

export const TasksColumnsListStyles = styled.ul`
  display: flex;

  @media screen and (width >= 768px) {
    gap: 16px;
  }

  @media screen and (width >= 1440px) {
    gap: 27px;
  }
`;
