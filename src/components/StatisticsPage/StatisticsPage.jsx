import { useState } from 'react';
import { addDays, format, getDate, getMonth, getYear, subDays } from 'date-fns';
import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

import Loader from '../shared/Loader/Loader';
import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const [currentDate, setCurrentDate] = useState(format(new Date(), 'yyyy-MM-dd'));

  const { data: tasks, isLoading } = useGetTasksQuery({
    year: getYear(new Date(currentDate)),
    month: getMonth(new Date(currentDate)) + 1,
    day: getDate(new Date(currentDate))
  });

  const onPrev = () => {
    const newDate = subDays(new Date(currentDate), 1);
    setCurrentDate(format(new Date(newDate), 'yyyy-MM-dd'));
  };

  const onNext = () => {
    const newDate = addDays(new Date(currentDate), 1);
    setCurrentDate(format(new Date(newDate), 'yyyy-MM-dd'));
  };

  return (
    <>
      <PeriodPaginator prevHandler={onPrev} nextHandler={onNext} type="day" date={currentDate} />
      {isLoading ? <Loader /> : <StatisticsChart tasks={tasks} />}
    </>
  );
};

export default StatisticsPage;
