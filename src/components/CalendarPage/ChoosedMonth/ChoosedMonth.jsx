import CalendarTable from './CalendarTable/CalendarTable';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import { ChoosedMonthStyles } from './ChoosedMonth.styled';

export default function ChoosedMonth() {
  // useEffect(() => {
  //   const generatedCalendar = generateCalendar();
  //   setCalendar(generatedCalendar);
  // }, []);

  // const generateCalendar = () => {};

  return (
    <ChoosedMonthStyles>
      <MonthCalendarHead />
      <CalendarTable />
    </ChoosedMonthStyles>
  );
}
