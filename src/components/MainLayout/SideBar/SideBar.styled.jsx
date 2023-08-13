import styled from 'styled-components';

export const SideBarContainer = styled.aside`
  position: absolute;
  z-index: 2;
  left: -225px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  width: 225px;
  height: 100vh;
  padding: 20px;
  transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
  transition: transform 0.3 ease-in-out;
`;
