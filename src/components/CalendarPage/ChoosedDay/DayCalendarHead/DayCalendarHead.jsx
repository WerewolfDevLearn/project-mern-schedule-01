import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { addDays, eachDayOfInterval, format, startOfWeek } from 'date-fns';

import {
  DayCalendarHeadStyles,
  DayCalendarHeadItem,
  WeekDay,
  DateDayWrap,
  DateDay,
  TasksCount,
  CheckStyles
} from './DayCalendarHead.styled';

export default function DayCalendarHead({ date, tasks }) {
  const { currentDate } = useParams();
  const { t } = useTranslation();
  const [selectedDay, setSelectedDay] = useState(date);
  const navigate = useNavigate();

  useEffect(() => {
    setSelectedDay(currentDate);
  }, [currentDate]);

  const screenWidth = window.innerWidth;

  const firstWeekDay = startOfWeek(new Date(date), { weekStartsOn: 1 });
  const weekDays = eachDayOfInterval({
    start: firstWeekDay,
    end: addDays(firstWeekDay, 6)
  });

  const getWeekDay = (day) => {
    if (screenWidth >= 768) {
      return t(format(day, 'eee'));
    }
    return t(`mob_${format(day, 'eee')}`);
  };

  const formatDate = (date) => {
    return format(date, 'yyyy-MM-dd');
  };

  const onSelectDay = (date) => {
    const path = `/calendar/day/${formatDate(date)}`;

    setSelectedDay(formatDate(date));

    navigate(path, { replace: true });
  };

  const getCountTasksForDay = (date) => {
    const formattedDate = formatDate(date);
    const tasksFiltered = tasks.filter((task) => task.date === formattedDate);
    const tasksFilteredNotDone = tasksFiltered.filter((task) => task.category !== 'done');
    const tasksFilteredDone = tasksFiltered.filter((task) => task.category === 'done');

    return (
      <>
        {tasksFilteredNotDone.length > 0 ? (
          <TasksCount>{tasksFilteredNotDone.length}</TasksCount>
        ) : (
          tasksFilteredNotDone.length < 1 &&
          tasksFilteredDone.length >= 1 && (
            <CheckStyles color="#2ac76b" width="15px" height="15px" />
          )
        )}
      </>
    );
  };

  return (
    <DayCalendarHeadStyles>
      {weekDays.map((day) => (
        <DayCalendarHeadItem key={day}>
          <a onClick={() => onSelectDay(day)}>
            <WeekDay>{getWeekDay(day)}</WeekDay>
            <DateDayWrap selected={formatDate(day) === selectedDay}>
              {getCountTasksForDay(day)}
              <DateDay>{format(day, 'd')}</DateDay>
            </DateDayWrap>
          </a>
        </DayCalendarHeadItem>
      ))}
    </DayCalendarHeadStyles>
  );
}

DayCalendarHead.propTypes = {
  date: PropTypes.string,
  tasks: PropTypes.array
};
