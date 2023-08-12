import { useState } from 'react';

import { CalendarTableStyles } from './CalendarTable.styled';

export default function CalendarTable() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    return (firstDay + 6) % 7;
  };

  const generateCalendar = () => {
    const totalDays = daysInMonth(currentDate);
    const startDay = firstDayOfMonth(currentDate);

    const calendar = [];
    let dayCounter = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if ((i === 0 && j < startDay) || dayCounter > totalDays) {
          week.push(null);
        } else {
          week.push(dayCounter);
          dayCounter++;
        }
      }
      calendar.push(week);
    }

    return calendar;
  };

  const calendar = generateCalendar();
  return (
    <CalendarTableStyles>
      <h2>CalendarTable</h2>

      <table>
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <td key={dayIndex}>{day}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </CalendarTableStyles>
  );
}
