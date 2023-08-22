import styled from 'styled-components';
import { backgroundColor, colorText } from 'src/styles/variables/Variables';

export const DayCalendarHeadStyles = styled.ul`
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.tasksListBorder};
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.colors.tasksListBackground};

  @media screen and (width >= 768px) {
    padding: 10px 32px;
  }

  @media screen and (width >= 1440px) {
    padding: 10px 46px;
  }
`;

export const DayCalendarHeadItem = styled.li`
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }

  p {
    text-transform: uppercase;
  }
`;

export const WeekDay = styled.p`
  color: ${({ theme }) => theme.colors.textAndIconTodo};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (width >= 768px) {
    font-size: 14px;
  }
`;

export const DateDayWrap = styled.div`
  position: relative;

  width: fit-content;
  padding: 4px 6px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.selected ? backgroundColor.primaryBlue : backgroundColor.transparent};
  color: ${(props) => (props.selected ? colorText.white : props.theme.colors.textAndIconTodo)};

  transition: background 100ms linear;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.accent}50;
  }
`;

export const DateDay = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  @media screen and (width >= 768px) {
    font-size: 16px;
  }
`;
