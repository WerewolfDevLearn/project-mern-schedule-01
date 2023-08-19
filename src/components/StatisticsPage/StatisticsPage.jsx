import { useState } from 'react';

import { useParams, useNavigate } from 'react-router-dom';
import {
  getYear,
  getMonth,
  getDate,
  format,
  setDay,
  lastDayOfMonth,
  startOfMonth,
  addMonths
} from 'date-fns';
import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

import { useDayHendler } from '../CalendarPage/dateHandler';

import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const [onPrevDay, onNextDay, dayD, monthD, yearD] = useDayHendler(new Date());
  const navigate = useNavigate();

  const { data: respons, isLoading } = useGetTasksQuery({ yearD, monthD, dayD });

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
      <PeriodPaginator
        prevHandler={onPrevDay}
        nextHandler={onNextDay}
        type="day"
      />
      {/* {!isLoading && (
        <StatisticsChart tasksByDay={taskStatusCountDay} tasksByMonth={taskStatusCountMonth} />
      )} */}
    </>
  );
};

export default StatisticsPage;
