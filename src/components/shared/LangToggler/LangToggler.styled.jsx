import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlagBtn = styled.button`
  position: relative;

  width: 44px;
  height: 44px;

  border-radius: 50%;
`;

export const Label = styled.p`
  position: absolute;
  top: 5px;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6.5px;

  width: 12px;
  height: 12px;

  font-size: 8px;

  background-color: white;
  border-radius: 50%;
`;
