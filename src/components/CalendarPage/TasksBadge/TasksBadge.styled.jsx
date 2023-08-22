import styled from 'styled-components';
import { Check } from 'src/components/shared/Icons';

export const TasksCount = styled.span`
  position: absolute;
  top: -7px;
  left: -7px;

  width: 15px;
  height: 15px;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;

  color: white;
  background: #ea3d65;

  &.month {
    top: 7px;
    left: 7px;

    width: 20px;
    height: 20px;
  }
`;

export const CheckStyles = styled(Check)`
  position: absolute;
  top: -7px;
  left: -7px;

  width: 15px;
  height: 15px;

  transform: scale(1.25);

  &.month {
    top: 7px;
    left: 7px;

    width: 20px;
    height: 20px;
  }
`;
