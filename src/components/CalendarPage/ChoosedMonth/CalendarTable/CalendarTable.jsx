import { useState } from 'react';

import { CalendarTableStyles, Fragment, Calendar } from './CalendarTable.styled';

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
  // const nextMonth = () => {
  //   const newDate = new Date(currentDate);
  //   newDate.setMonth(newDate.getMonth() + 1);
  //   setCurrentDate(newDate);
  // };
  // const prevMonth = () => {
  //   const newDate = new Date(currentDate);
  //   newDate.setMonth(newDate.getMonth() - 1);
  //   setCurrentDate(newDate);
  // };

  const calendar = generateCalendar();
  return (
    <CalendarTableStyles>
      {/* <div>
        <button onClick={prevMonth}>Previous Month</button>
        <h2>
          {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
        </h2>
        <button onClick={nextMonth}>Next Month</button>
      </div> */}
      <Calendar>
        {/* <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead> */}
        <tbody>
          {calendar.map((week, index) => (
            <tr key={index}>
              {week.map((day, dayIndex) => (
                <Fragment key={dayIndex}>{day}</Fragment>
              ))}
            </tr>
          ))}
        </tbody>
      </Calendar>
    </CalendarTableStyles>
  );
}
