import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { CalendarToolbar } from '../shared/CalendarToolbar/CalendarToolbar';
import Loader from '../shared/Loader/Loader';

export default function CalendarPage() {
  return (
    <>
      {/* //       <CalendarToolbar />
//       <Suspense fallback={<Loader />}>
//         <Outlet />
//       </Suspense> */}

      {/* <CalendarToolbar> */}
      {/* <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense> */}
      {/* </CalendarToolbar> */}
    </>
  );
}
