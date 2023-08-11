import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 0 auto;
  padding-inline: 20px;

  @media (min-width: ${({ theme }) => theme.breakpoints.m}) {
    padding-inline: 32px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    max-width: 1440px;
    padding-inline: 128px;
  }
`;
