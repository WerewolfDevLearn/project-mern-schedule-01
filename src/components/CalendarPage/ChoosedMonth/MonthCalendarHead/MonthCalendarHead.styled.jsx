import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MonthCalendarHeadStyles = styled.div``;
export const MobileDaysList = styled.ul`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  padding: 16px 16px;
  margin-bottom: 14px;
  background-color: ${({ theme }) => theme.colors.backgroundUserForm};
  border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
  border-radius: 8px;
  @media screen and (min-width: ${themes.breakpoints.m}) {
    display: none;
  }
`;

export const DesktopDayList = styled.ul`
  display: none;
  @media screen and (min-width: ${themes.breakpoints.m}) {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 65px;
    padding: 14px 40px;
    margin-bottom: 18px;
    height: 46px;
    background-color: ${({ theme }) => theme.colors.backgroundUserForm};
    border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
    border-radius: 8px;

    @media screen and (min-width: ${themes.breakpoints.l}) {
      height: 46px;
      padding: 14px 60px;
      margin-bottom: 15px;
    }
  }
`;
export const WorkDay = styled.li`
  width: calc(100% / 7);
  color: ${({ theme }) => theme.colors.textCancelBtn};
  font-family: Inter;
  font-size: ${themes.fontSizes.m};
  font-weight: ${themes.fontWeight.sb};
  line-height: 18px;
  text-transform: uppercase;
`;

export const WeekendDay = styled(WorkDay)`
  color: ${themes.colors.accent};
`;
