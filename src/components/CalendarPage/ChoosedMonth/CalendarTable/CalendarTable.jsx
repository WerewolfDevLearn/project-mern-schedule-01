import { useSelector } from 'react-redux';

import { nanoid } from 'nanoid';
import { useState, useEffect } from 'react';
import {
  format,
  isToday,
  getUnixTime,
  isSameMonth,
  startOfDay,
  endOfDay,
  addDays,
  startOfWeek,
  isSameDay
} from 'date-fns';

import { useisLoading } from '../../../../redux/selectors';

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
  const [askDay, setAskDay] = useState(new Date());

  const isTasksLoading = useSelector(useisLoading);
  const tasks = useSelector((state) => state.tasks.items);

  const generateCalendar = () => {
    const startDay = startOfWeek(new Date(), { weekStartsOn: 1 });
    const firstDayOfNextMonth = new Date();

    const calendar = [];
    let day = startDay;

    while (!isSameDay(day, firstDayOfNextMonth)) {
      calendar.push(day);
      day = addDays(day, 1);
    }

    setCalendar(calendar);
  };

  useEffect(() => {
    generateCalendar();
  }, []);

  const isCurrentMonth = (day) => isSameMonth(askDay, day);

  let filteredTasks = [];

  const getDayTasks = (day) => {
    filteredTasks = tasks?.filter(
      (task) =>
        getUnixTime(new Date(task.date)) >= getUnixTime(startOfDay(day)) &&
        getUnixTime(new Date(task.date)) < getUnixTime(endOfDay(day))
    );
  };

  return (
    <GridWrapper>
      {calendar.map((dayItem) => (
        <CellWrapper
          to={`/calendar/day/${format(dayItem, 'ddMMMMyyyy')}`}
          key={nanoid()}
          iscurrentmonth={isCurrentMonth(dayItem).toString()}
        >
          <RowInCell justifyContent={'flex-end'}>
            <ShowDayWrapper>
              <DayWrapper>
                {isToday(dayItem) ? (
                  <CurrentDay>{format(dayItem, 'd')}</CurrentDay>
                ) : (
                  format(dayItem, 'd')
                )}
              </DayWrapper>
            </ShowDayWrapper>
            {!isTasksLoading && (
              <TaskListWrapper>
                {getDayTasks(dayItem)}
                {filteredTasks?.slice(0, 2).map((task) => (
                  <TaskItem key={nanoid()} priority={task.priority}>
                    {task.title}
                  </TaskItem>
                ))}
              </TaskListWrapper>
            )}
            {filteredTasks?.length > 2 && <TasksMoreLabel>...</TasksMoreLabel>}
          </RowInCell>
        </CellWrapper>
      ))}
    </GridWrapper>
  );
}
