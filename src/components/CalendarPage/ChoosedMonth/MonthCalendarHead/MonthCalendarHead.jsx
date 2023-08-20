import { useTranslation } from 'react-i18next';

import {
  MonthCalendarHeadStyles,
  WorkDay,
  WeekendDay,
  MobileDaysList,
  DesktopDayList
} from './MonthCalendarHead.styled';

const workDayNames = ['MON', 'TUE', 'WED', 'THU', 'FRI'];
const weekendDayNames = ['SAT', 'SUN'];

export default function MonthCalendarHead() {
  const { t } = useTranslation();

  return (
    <MonthCalendarHeadStyles>
      <DesktopDayList>
        {workDayNames.map((day) => (
          <WorkDay key={day}>{t(`days.${day}`)}</WorkDay>
        ))}
        {weekendDayNames.map((day) => (
          <WeekendDay key={day}>{t(`days.${day}`)}</WeekendDay>
        ))}
      </DesktopDayList>
      <MobileDaysList>
        {workDayNames.map((day) => (
          <WorkDay key={day}>{t(`mob_${day}`)}</WorkDay>
        ))}
        {weekendDayNames.map((day) => (
          <WeekendDay key={day}>{t(`mob_${day}`)}</WeekendDay>
        ))}
      </MobileDaysList>
    </MonthCalendarHeadStyles>
  );
}
