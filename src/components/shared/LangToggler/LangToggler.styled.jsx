import styled from 'styled-components';

import { themes } from '../../../styles/variables/themes';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FlagBtn = styled.button`
  position: relative;
  border-radius: 8px;
  transform: scale(1);
  transition-property: transform;
  transition-duration: ${themes.animations.duration};
  transition-timing-function: ${themes.animations.cubicBezier};
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const Label = styled.p`
  position: absolute;
  top: -5px;
  right: -3px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 6.5px;

  width: 12px;
  height: 12px;

  font-size: 8px;
  font-weight: 700;

  background-color: ${themes.colors.ligthBlue};
  border-radius: 50%;
`;

export const PopoverWrapper = styled.ul`
  padding: 20px;
  border-radius: 8px;
  z-index: 5;

  display: flex;
  flex-direction: column;
  gap: 18px;

  background: ${({ theme }) => theme.colors.backgroundModalTodo};
  border: 1px solid ${({ theme }) => theme.colors.tasksListBorder};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const PopoverItem = styled.li`
  width: auto;
`
