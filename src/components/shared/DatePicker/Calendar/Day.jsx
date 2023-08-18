import { useState } from 'react';
import { useDatepickerContext } from '../DaypickerContext';

export default function Day({ day }) {
  const [storage, _] = useState(day);
  const setDate = useDatepickerContext();
  const currentDay = day.currentDate ? 'current-day' : 'other-day';
  const currentMonth = day.currentMonth ? 'current-month' : 'other-month';
  return (
    <>
      <li className="day-number">
        <button className={` ${currentMonth} ${currentDay}`} onClick={() => setDate(storage)}>
          {day.day}
        </button>
      </li>
    </>
  );
}
