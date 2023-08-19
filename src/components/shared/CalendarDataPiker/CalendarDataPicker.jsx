import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { CalendarGlobalStyles } from './CalendarDataPicker.styled';

export default function CalendarDataPicker({ type, CustomInput, onSelectDay }) {
  const [startDate, setStartDate] = useState(onSelectDay);
  const navigate = useNavigate();

  useEffect(() => {
    setStartDate(onSelectDay);
  }, [onSelectDay]);
  // console.log('STARTDATE', startDate);
  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          const formattedDate = format(date, 'yyyy-MM-dd');
          navigate(`/calendar/${type}/${formattedDate}`);
        }}
        customInput={<CustomInput />}
        dateFormat="MMMM yyyy"
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <CalendarGlobalStyles />
    </>
  );
}
