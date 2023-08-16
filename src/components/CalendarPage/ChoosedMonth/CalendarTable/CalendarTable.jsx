import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  format,
  isToday,
  isSameMonth,
  startOfDay,
  endOfDay,
  addDays,
  startOfWeek,
  isSameDay
} from 'date-fns';

import Loader from 'src/components/shared/Loader/Loader';
import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

import {
  CellWrapper,
  DayWrapper,
  GridWrapper,
  RowInCell,
  CurrentDay,
  ShowDayWrapper,
  TaskListWrapper,
  TaskItem,
  TasksMoreLabel
} from './CalendarTable.styled';

export default function CalendarTable() {
  const [calendar, setCalendar] = useState([]);
  const { currentDate } = useParams();
  const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  const data = { year, month };
  const { data: respons, isLoading: isTasksLoading } = useGetTasksQuery(data);
  console.log('respons: ', respons);
  console.log('time ', Date.now());

  // const calendar = [];
  const generateCalendar = () => {
    const startDay = startOfWeek(new Date(year, month - 1, 1), { weekStartsOn: 1 });
    const lastDayOfMonth = endOfDay(new Date(year, month, 0));
    let day = startDay;
    while (!isSameDay(day, lastDayOfMonth)) {
      calendar.push(day);
      day = addDays(day, 1);
    }
    // setCalendar((calendar) => calendar);
  };
  // generateCalendar();

  const isCurrentMonth = (day) => isSameMonth(new Date(), day);

  const getDayTasks = (day, tasks) => {
    return tasks.filter(
      (task) =>
        new Date(task.date).getTime() >= startOfDay(day).getTime() &&
        new Date(task.date).getTime() < endOfDay(day).getTime()
    );
  };

  const renderedCalendar = calendar.map((dayItem) => {
    const calendarWithTask = getDayTasks(dayItem, respons.tasks);

    return (
      <CellWrapper
        to={`/calendar/day/${format(dayItem, 'ddMMMMyyyy')}`}
        key={dayItem.getTime()}
        iscurrentmonth={isCurrentMonth(dayItem).toString()}
        istoday={isToday(dayItem).toString()}
      >
        <RowInCell $justifyContent="flex-end">
          <ShowDayWrapper>
            {isToday(dayItem) ? (
              <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
            ) : (
              <DayWrapper>{format(dayItem, 'd')}</DayWrapper>
            )}
          </ShowDayWrapper>
          (
          <TaskListWrapper>
            {calendarWithTask.slice(0, 2).map((task) => (
              <TaskItem key={task.id} priority={task.priority}>
                {task.title}
              </TaskItem>
            ))}
          </TaskListWrapper>
          ){calendarWithTask.length > 2 && <TasksMoreLabel>...</TasksMoreLabel>}
        </RowInCell>
      </CellWrapper>
    );
  });

  return isTasksLoading ? <Loader /> : <GridWrapper>{renderedCalendar}</GridWrapper>;
}
