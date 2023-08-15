import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';
import { NavLink } from 'react-router-dom';

const getPriorityColor = (props) => {
  switch (props.priority) {
    case 'low':
      return `color: ${themes.colors.accent}; background-color: ${themes.colors.blueInNotes};`;
    case 'medium':
      return `color: ${themes.colors.mediumTask}; background-color: ${themes.colors.yellowInNotes};`;
    case 'high':
      return `color: ${themes.colors.highTask}; background-color: ${themes.colors.pinkInNotes};`;
    default:
      return `color: ${themes.colors.accent}; background-color: ${themes.colors.white}`;
  }
};

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 8px;
`;

export const CellWrapper = styled(NavLink)`
  min-width: 28px;
  background-color: ${themes.colors.white};
  border: 1px solid ${themes.colors.sidebarBorder};
  min-height: 94px;
  font-family: Inter;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.17;
  color: ${(props) =>
    props.istoday === 'true'
      ? props.theme.backgroundModalTodo
      : props.iscurrentmonth === 'true'
      ? props.theme.textCancelBtnIntodo
      : props.theme.backgroundModalTodo};

  &:first-child {
    border-top-left-radius: 8px;
  }

  &:last-child {
    border-bottom-right-radius: 8px;
  }

  &:nth-child(7) {
    border-top-right-radius: 8px;
  }

  &:nth-last-child(7) {
    border-bottom-left-radius: 8px;
  }

  @media screen and (min-width: ${themes.breakpoints.s}) {
    min-width: 48px;
  }

  @media screen and (min-width: ${themes.breakpoints.m}) {
    min-width: 100px;
    height: 144px;
    font-size: ${themes.fontSizes.m};
    line-height: 1.12;
  }

  @media screen and (min-width: ${themes.breakpoints.l}) {
    height: 135px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
  ${(props) =>
    props.$justifyContent
      ? `justify-content: ${props.$justifyContent};`
      : 'justify-content: flex-start;'}
`;

export const DayWrapper = styled.div`
  padding: 10px 12px;
  font-weight: ${themes.fontWeight.b};
  font-family: Inter;
  color: ${themes.colors.black};

  @media screen and (min-width: ${themes.breakpoints.m}) {
    padding: 18px 22px;
  }
`;

export const CurrentDay = styled.div`
  background: ${(props) => props.theme.textMonthDayBtn};
  color: ${themes.colors.white};
  padding: 4px 6px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -4px -6px;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    padding: 4px 8px;
    margin: -4px -8px;
    border-radius: 8px;
  }
`;

export const ShowDayWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const TaskListWrapper = styled.ul`
  list-style-type: none;
  padding: 0 8px 0px 8px;
`;

export const TaskItem = styled.li`
  height: 22px;
  padding: 4px 4px 4px 8px;
  font-family: Inter;
  font-weight: ${themes.fontWeight.b};
  font-size: ${themes.fontSizes.micro};
  line-height: 1.4;
  border-radius: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
  ${(props) => getPriorityColor(props)};

  @media screen and (min-width: ${themes.breakpoints.m}) {
    min-width: 92px;
    height: 26px;
    padding: 4px 8px 4px 12px;
    font-size: ${themes.fontSizes.micro};
    line-height: 1.29;
  }

  @media screen and (min-width: ${themes.breakpoints.l}) {
    min-width: 114px;
  }
`;

export const TasksMoreLabel = styled.div`
  margin-top: auto;
  margin: auto;
  color: ${themes.colors.accent};
  text-align: center;
  overflow: hidden;
  font-size: ${themes.fontSizes.s};
`;
