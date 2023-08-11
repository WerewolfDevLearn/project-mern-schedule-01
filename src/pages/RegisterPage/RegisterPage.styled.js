import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: inline-flex;
  padding: auto 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: #dcebf7;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  font-size: 12px;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`;
