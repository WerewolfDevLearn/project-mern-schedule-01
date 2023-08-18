import Day from './Day';
import { arrFill } from './arrFill';

export default function CalendarBody({ year, month }) {
  const CurrMonthDaysNumbe = arrFill(year, month);
  return (
    <ul className="month-dates">
      {CurrMonthDaysNumbe.map((day) => (
        <Day day={day} key={day.id} />
      ))}
    </ul>
  );
}
