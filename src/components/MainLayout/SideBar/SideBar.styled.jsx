import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding: 20px;
`;
