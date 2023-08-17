import { weekDaysShort } from '../weeks';
import { months } from '../mounthes';

export default function CalendarHeader({ year, month, Prev, Next }) {
  return (
    <>
      <div className="calendar-header">
        <p>
          {months[month - 1]}/{year}
        </p>
        <button onClick={Prev} type="button">
          Prev
        </button>
        <button onClick={Next} type="button">
          Next
        </button>
      </div>
      <ul className="weeks-day">
        {weekDaysShort.map((weekDay) => (
          <li key={weekDay} className="week-day">
            {weekDay}
          </li>
        ))}
      </ul>
    </>
  );
}
