import { useParams } from 'react-router-dom';
import {
  format,
  isToday,
  isSameMonth,
  startOfDay,
  endOfDay,
  addDays,
  startOfWeek,
  endOfMonth,
  startOfMonth
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
  const { currentDate } = useParams();
  const year = currentDate.split('-')[0];
  const month = currentDate.split('-')[1];
  const data = { year, month };
  const { data: respons, isLoading: isTasksLoading } = useGetTasksQuery(data);

  const calendar = [];
  const generateCalendar = () => {
    const firstDayOfMonth = startOfMonth(new Date());
    const startDay = startOfWeek(firstDayOfMonth, { weekStartsOn: 1 });
    const lastDayOfMonth = endOfMonth(new Date());
    let day = startDay;
    while (day <= lastDayOfMonth) {
      calendar.push(day);
      day = addDays(day, 1);
    }
  };
  generateCalendar();
  const isCurrentMonth = (day) => isSameMonth(new Date(), day);

  const getDayTasks = (day, tasks) => {
    if (tasks) {
      return tasks.filter(
        (task) =>
          new Date(task.date).getTime() >= startOfDay(day).getTime() &&
          new Date(task.date).getTime() < endOfDay(day).getTime()
      );
    }
  };
  const RC = () => {
    if (!isTasksLoading) {
      const renderedCalendar = calendar.map((dayItem, idx) => {
        const calendarWithTask = getDayTasks(dayItem, respons?.tasks);

        return (
          <CellWrapper
            to={`/calendar/day/${format(dayItem, 'yyyy-MM-dd')}`}
            key={idx}
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
              <TaskListWrapper>
                {calendarWithTask.slice(0, 2).map((task) => (
                  <TaskItem key={task._id} priority={task.priority}>
                    {task.title}
                  </TaskItem>
                ))}
              </TaskListWrapper>
              {calendarWithTask.length > 2 && <TasksMoreLabel>...</TasksMoreLabel>}
            </RowInCell>
          </CellWrapper>
        );
      });
      return renderedCalendar;
    }
  };
  return isTasksLoading ? <Loader /> : <GridWrapper>{RC()}</GridWrapper>;
}
