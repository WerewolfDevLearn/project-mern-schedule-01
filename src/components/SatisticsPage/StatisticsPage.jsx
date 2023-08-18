import { getYear, getMonth, getDate, format, setDay, lastDayOfMonth, startOfMonth } from 'date-fns';

import { useState } from 'react';

// import { useParams } from 'react-router-dom';

import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const currentDate = format(new Date(), 'yyyy-MM-dd');
  const currMonth = getMonth(new Date(currentDate));
  const currYear = getYear(new Date(currentDate));
  const currDay = getDate(new Date(currentDate));
  const firstDayOfMonth = startOfMonth(currMonth);
  const LastDayOfMonth = lastDayOfMonth(currMonth);

  const [month, setMonth] = useState(currMonth + 1);
  const [year, setYear] = useState(currYear);
  const [day, setDate] = useState(currDay);

  const { data: respons, isLoading } = useGetTasksQuery({ year, month, day: 23 });

  const onPrev = () => {
    setDay((day) => day - 1);
    if (day <= 1) {
      setMonth((month) => month - 1);
    }
    if (month <= 1) {
      setYear((year) => year - 1);
      setMonth(12);
    }
  };
  const onNext = () => {
    setDay((day) => day + 1);
    if (day >= lastDayOfMonth) setMonth((month) => month + 1);
    if (month >= 12) {
      setYear((year) => year + 1);
      setMonth(1);
    }
  };

  const calculateTaskStatusCount = (response) => {
    const taskStatusCountDay = {
      todo: 0,
      inprogress: 0,
      done: 0
    };

    const taskStatusCountMonth = {
      todo: 0,
      inprogress: 0,
      done: 0
    };

    // response.tasksByDay.forEach((task) => {
    //   if (task.category === 'todo') {
    //     taskStatusCountDay.todo++;
    //   } else if (task.category === 'inprogress') {
    //     taskStatusCountDay.inprogress++;
    //   } else if (task.category === 'done') {
    //     taskStatusCountDay.done++;
    //   }
    // });

    // response.tasks.forEach((task) => {
    //   if (task.category === 'todo') {
    //     taskStatusCountMonth.todo++;
    //   } else if (task.category === 'inprogress') {
    //     taskStatusCountMonth.inprogress++;
    //   } else if (task.category === 'done') {
    //     taskStatusCountMonth.done++;
    //   }
    // });
    return [taskStatusCountDay, taskStatusCountMonth];
  };

  const [taskStatusCountDay, taskStatusCountMonth] = calculateTaskStatusCount(respons);

  return (
    <>
      <PeriodPaginator prevHandler={onPrev} nextHandler={onNext} type="day" date={currentDate} />
      {/* {!isLoading && (
        <StatisticsChart tasksByDay={taskStatusCountDay} tasksByMonth={taskStatusCountMonth} />
      )} */}
    </>
  );
};

export default StatisticsPage;
