import { useState, useEffect } from 'react';

import CalendarTable from './CalendarTable/CalendarTable';
import MonthCalendarHead from './MonthCalendarHead/MonthCalendarHead';
import { ChoosedMonthStyles } from './ChoosedMonth.styled';

export default function ChoosedMonth() {
  const [calendar, setCalendar] = useState([]);

  useEffect(() => {
    const generatedCalendar = generateCalendar();
    setCalendar(generatedCalendar);
  }, []);

  const generateCalendar = () => {};

  return (
    <ChoosedMonthStyles>
      <MonthCalendarHead />
      <CalendarTable calendar={calendar} />
    </ChoosedMonthStyles>
  );
}
