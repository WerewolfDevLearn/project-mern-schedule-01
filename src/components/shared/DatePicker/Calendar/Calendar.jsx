import { useState } from 'react';

import CalendarHeader from './CalendarHeader';
import CalendarBody from './CalendarBody';
export default function Calendar() {
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const [month, setMonth] = useState(currMonth + 1);
  const [year, setYear] = useState(currYear);
  const onPrev = () => {
    setMonth((month) => month - 1);
    if (month <= 1) {
      setYear((year) => year - 1);
      setMonth(12);
    }
  };
  const onNext = () => {
    setMonth((month) => month + 1);
    if (month >= 12) {
      setYear((year) => year + 1);
      setMonth(1);
    }
  };
  return (
    <>
      <div className="calendar-wrapper">
        <CalendarHeader year={year} month={month} Prev={onPrev} Next={onNext} />
        <CalendarBody year={year} month={month} />
      </div>
    </>
  );
}
