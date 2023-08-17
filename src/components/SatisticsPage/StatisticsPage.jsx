import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const date = new Date();
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const [month, setMonth] = useState(currMonth + 1);
  const [year, setYear] = useState(currYear);

  const onPrev = () => {
    setMonth((month) => month - 1);
    if (month <= 1) {
      setYear((year) => year - 1);
      setMonth(12);
    }
  };
  const onNext = () => {
    setMonth((month) => month + 1);
    if (month >= 12) {
      setYear((year) => year + 1);
      setMonth(1);
    }
  };

  const tasksByDay = {
    todo: 10,
    inprogress: 5,
    done: 15
  };
  const tasksByMonth = {
    todo: 50,
    inprogress: 25,
    done: 75
  };

  return (
    <>
      <h1>StatisticsPage</h1>
      <PeriodPaginator prevHandler={onPrev} nextHandler={onNext} />
      <StatisticsChart tasksByDay={tasksByDay} tasksByMonth={tasksByMonth} />
    </>
  );
};

export default StatisticsPage;
