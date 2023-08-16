import { Suspense, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { CalendarToolbar } from '../shared/CalendarToolbar/CalendarToolbar';
import Loader from '../shared/Loader/Loader';

export default function CalendarPage() {
  const { pathname } = useLocation();
  const today = pathname.split('/')[3];
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
      <Suspense fallback={<Loader />}>
        <CalendarToolbar today={today} prevHandler={onPrev} nextHandler={onNext} />
        <Outlet />
      </Suspense>
    </>
  );
}
