import PropTypes from 'prop-types';
import { format } from 'date-fns';
import { uk, enUS } from 'date-fns/locale';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { CalendarGlobalStyles } from './CalendarDataPicker.styled';

export default function CalendarDataPicker({ type, CustomInput, onSelectDay, setCurrentDate }) {
  const params = useParams();
  const isParams = Boolean(Object.keys(params).length);

  const [startDate, setStartDate] = useState(onSelectDay);
  const navigate = useNavigate();

  const { i18n } = useTranslation();
  const locale = i18n.language === 'uk' ? uk : enUS;

  useEffect(() => {
    setStartDate(onSelectDay);
  }, [onSelectDay]);

  return (
    <>
      <DatePicker
        selected={startDate}
        onChange={(date) => {
          setStartDate(date);
          const formattedDate = format(date, 'yyyy-MM-dd');
          if (setCurrentDate) {
            setCurrentDate(formattedDate);
          }
          navigate(isParams ? `/calendar/${type}/${formattedDate}` : '/statistics');
        }}
        customInput={<CustomInput />}
        // dateFormat="MMMM yyyy"
        dateFormat={type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy'}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
        locale={locale}
      />
      <CalendarGlobalStyles />
    </>
  );
}

CalendarDataPicker.propTypes = {
  type: PropTypes.string.isRequired,
  CustomInput: PropTypes.elementType.isRequired,
  onSelectDay: PropTypes.object.isRequired,
  setCurrentDate: PropTypes.func
};
