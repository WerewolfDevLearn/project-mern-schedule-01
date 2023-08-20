import { forwardRef, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

import { DataBtn, CalendarGlobalStyles } from './CalendarDataPicker.styled';

export default function CalendarDataPicker() {
  const [startDate, setStartDate] = useState(new Date());

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <DataBtn onClick={onClick} ref={ref}>
        {value}
      </DataBtn>
    );
  });

  // console.log(startDate);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        customInput={<CustomInput />}
        dateFormat="MMMM yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
}
