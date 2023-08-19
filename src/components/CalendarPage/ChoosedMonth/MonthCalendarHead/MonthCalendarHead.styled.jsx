import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MonthCalendarHeadStyles = styled.div``;
export const MobileDaysList = styled.ul`
  width: 335px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 34px;
  padding: 16px 16px;
  margin: auto;
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 65px;

    padding: 14px 40px;
    margin: 0 auto;
    margin-bottom: 18px;

    width: 704px;
    height: 46px;

    background-color: ${({ theme }) => theme.colors.backgroundUserForm};
    border: 1px solid ${({ theme }) => theme.colors.borderTableAndInput};
    border-radius: 8px;

    @media screen and (min-width: ${themes.breakpoints.l}) {
      width: 1087px;
      height: 46px;

      padding: 14px 60px;
      margin-bottom: 15px;

      gap: 122px;
    }
  }
`;
export const WorkDay = styled.li`
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
