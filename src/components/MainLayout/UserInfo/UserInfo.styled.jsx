import styled from 'styled-components';

export const UserInfoStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const UserName = styled.p`
  color: ${({ theme }) => theme.colors.textCancelBtn};

  font-size: 14px;
  font-weight: 700;
  line-height: 1.28;
  margin-right: 8px;
`;
