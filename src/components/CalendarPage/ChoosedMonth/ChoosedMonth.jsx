import CalendarTable from './CalendarTable/CalendarTable';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import { ChoosedMonthStyles } from './ChoosedMonth.styled';

export default function ChoosedMonth() {
  return (
    <ChoosedMonthStyles>
      <MonthCalendarHead />
      <CalendarTable />
    </ChoosedMonthStyles>
  );
}
