import styled from 'styled-components';

export const ToolbarWrapper = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 40px;
  }
`;
