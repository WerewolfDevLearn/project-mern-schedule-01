import { MonthCalendarHeadStyles, Day, DaysOfWeek } from './MonthCalendarHead.styled';

const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export default function MonthCalendarHead() {
  return (
    <MonthCalendarHeadStyles>
      <h2>MonthCalendarHead</h2>
      <DaysOfWeek>
        {daysOfWeek.map((day) => (
          <Day key={day}>{day}</Day>
        ))}
      </DaysOfWeek>
    </MonthCalendarHeadStyles>
  );
}
