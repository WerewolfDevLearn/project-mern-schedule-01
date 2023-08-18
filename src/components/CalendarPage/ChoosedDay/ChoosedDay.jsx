import { getYear, getMonth, parse } from 'date-fns';
import { useParams } from 'react-router-dom';
import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';
import Loader from 'src/components/shared/Loader/Loader';

import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import { ChoosedDayStyles } from './ChoosedDay.styled';

export default function ChoosedDay() {
  const { currentDate } = useParams();
  const year = getYear(parse(currentDate, 'yyyy-MM-dd', new Date()));
  const month = getMonth(parse(currentDate, 'yyyy-MM-dd', new Date())) + 1;
  const date = { year, month };
  const { data: tasks, isFetching, isLoading } = useGetTasksQuery(date);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <ChoosedDayStyles>
      <DayCalendarHead date={currentDate} />
      <TasksColumnsList tasks={tasks.tasks} />
    </ChoosedDayStyles>
  );
}
