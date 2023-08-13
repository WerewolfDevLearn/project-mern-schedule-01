import styled from 'styled-components';

export const MainLayOutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: ${({ theme }) => theme.colors.backgroundAuth};
`;
export const MainLayOutSubContainer = styled.div`
  display: flex;
`;

export const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
