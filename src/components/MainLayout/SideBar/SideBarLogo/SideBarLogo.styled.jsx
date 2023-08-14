import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const LogoDiv = styled.div`
  display: flex;
  width: 222px;
  gap: 10px;
  align-items: center;
  margin-bottom: 32px;
`;
export const LogoText = styled.h1`
  color: ${({ theme }) => theme.colors.goose};
`;
export const LogoIMG = styled.img`
  width: 70px;
`;
