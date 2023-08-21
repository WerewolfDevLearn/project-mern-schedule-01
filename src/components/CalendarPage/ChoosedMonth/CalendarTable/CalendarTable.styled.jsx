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

export const GridWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 564px;
  gap: 0px;
  align-content: flex-start;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    height: 860px;
  }
  @media screen and (min-width: ${themes.breakpoints.l}) {
    height: 750px;
  }
`;

export const CellWrapper = styled(NavLink)`
  position: relative;
  width: calc(100% / 7);
  height: 93px;
  text-align: right;
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  padding-top: 31px;
  padding-bottom: 1px;
  cursor: pointer;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    height: 144px;
    font-size: ${themes.fontSizes.m};
    line-height: 1.12;
    padding-top: 41px;
  }

  @media screen and (min-width: ${themes.breakpoints.l}) {
    height: 125px;
  }
`;

export const RowInCell = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DayWrapper = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 6px;
  font-weight: ${themes.fontWeight.b};
  font-family: Inter;
  color: ${({ theme }) => theme.colors.textCancelBtn};
  font-size: ${themes.fontSizes.xs};
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    top: 14px;
    right: 14px;

    padding: 4px 8px;

    border-radius: 8px;

    font-size: ${themes.fontSizes.m};
    line-height: 1.125;
  }
`;

export const CurrentDay = styled.div`
  background: ${themes.colors.accent};
  color: ${themes.colors.white};
  position: absolute;
  top: 8px;
  right: 4px;
  padding: 4px 6px;
  border-radius: 8px;
  font-weight: ${themes.fontWeight.b};
  font-family: Inter;
  font-size: ${themes.fontSizes.xs};
  line-height: 1.17;
  text-transform: uppercase;

  @media screen and (min-width: ${themes.breakpoints.m}) {
    top: 14px;
    right: 14px;

    padding: 4px 8px;

    border-radius: 8px;

    font-size: ${themes.fontSizes.m};
    line-height: 1.125;
  }
`;

export const ShowDayWrapper = styled.div``;

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
