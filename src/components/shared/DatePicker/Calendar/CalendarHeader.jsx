import { weekDaysLetter } from '../weeks';
import { months } from '../mounthes';

export default function CalendarHeader({ year, month, Prev, Next }) {
  return (
    <>
      <div className="calendar-header">
        <button class="arrow" onClick={Prev} type="button">
          ←
        </button>
        <p>
          {months[month - 1]} {year}
        </p>

        <button class="arrow" onClick={Next} type="button">
          →
        </button>
      </div>
      <ul className="weeks-day">
        {weekDaysLetter.map((weekDay) => (
          <li key={weekDay} className="week-day">
            {weekDay}
          </li>
        ))}
      </ul>
    </>
  );
}
