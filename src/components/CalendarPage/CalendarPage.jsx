import { addDays, addMonths, format, subDays, subMonths } from 'date-fns';
import { Suspense } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { CalendarToolbar } from '../shared/CalendarToolbar/CalendarToolbar';
import Loader from '../shared/Loader/Loader';

export default function CalendarPage() {
  const { currentDate } = useParams();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const onPrev = () => {
    if (pathname.includes('day')) {
      const newDate = subDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      return;
    }
    const newDate = subMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  const onNext = () => {
    if (pathname.includes('day')) {
      const newDate = addDays(new Date(currentDate), 1);
      navigate(`/calendar/day/${format(newDate, 'yyyy-MM-dd')}`);
      return;
    }
    const newDate = addMonths(new Date(currentDate), 1);
    navigate(`/calendar/month/${format(newDate, 'yyyy-MM-dd')}`);
  };

  return (
    <>
      <CalendarToolbar prevHandler={onPrev} nextHandler={onNext} today={currentDate} />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}
