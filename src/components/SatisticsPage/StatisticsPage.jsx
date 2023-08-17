// import StatisticsChart from '../SatisticsPage/StatisticsChart/StatisticsChart';

// export default function SatisticsPage() {
//   return (
//     <>
//       <h1>SatisticsPage</h1>;
//       <StatisticsChart />
//     </>
//   );
// }
// import { getYear, getMonth, parse } from 'date-fns';

// import { useParams } from 'react-router-dom';

// import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

// import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

// import StatisticsChart from './StatisticsChart/StatisticsChart';

// const StatisticsPage = () => {
//   const currentDate = '2023-8-16';
//   const year = getYear(parse(currentDate, 'yyyy-MM-dd', new Date()));
//   const month = getMonth(parse(currentDate, 'yyyy-MM-dd', new Date())) + 1;
//   const date = { year, month };
//   const { data, isFetching, isLoading } = useGetTasksQuery(date);
//   const { tasks } = data;
//   const tasksByDay = {
//     todo: 10,
//     inprogress: 5,
//     done: 15
//   };
//   const tasksByMonth = {
//     todo: 50,
//     inprogress: 25,
//     done: 75
//   };

//   return (
//     <>
//       <h1>StatisticsPage</h1>
//       <PeriodPaginator />
//       <StatisticsChart tasksByDay={tasksByDay} tasksByMonth={tasksByMonth} />
//     </>
//   );
// };

// export default StatisticsPage;

import { getYear, getMonth, parse } from 'date-fns';

// import { useParams } from 'react-router-dom';

import { useGetTasksQuery } from 'src/redux/tasks/tasksApi';

// import PeriodPaginator from '../shared/PeriodPaginator/PeriodPaginator';

import StatisticsChart from './StatisticsChart/StatisticsChart';

const StatisticsPage = () => {
  const currentDate = '2023-8-16';
  const year = getYear(parse(currentDate, 'yyyy-MM-dd', new Date()));
  const month = getMonth(parse(currentDate, 'yyyy-MM-dd', new Date())) + 1;
  const date = { year, month };
  // const { data, isFetching, isLoading } = useGetTasksQuery(date);
  const { data, isLoading } = useGetTasksQuery(date);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!data) {
    return <p>No data available.</p>;
  }

  const { tasks } = data;

  const calculateTaskStatusCount = (tasks) => {
    const taskStatusCount = {
      todo: 0,
      inprogress: 0,
      done: 0
    };

    tasks.forEach((task) => {
      if (task.status === 'todo') {
        taskStatusCount.todo++;
      } else if (task.status === 'inprogress') {
        taskStatusCount.inprogress++;
      } else if (task.status === 'done') {
        taskStatusCount.done++;
      }
    });

    return taskStatusCount;
  };

  const taskStatusCountByDay = calculateTaskStatusCount(tasks);
  // const taskStatusCountByMonth = calculateTaskStatusCount(tasksForCurrentMonth);
  const taskStatusCountByMonth = calculateTaskStatusCount(tasks);

  return (
    <>
      <h1>StatisticsPage</h1>
      {/* <PeriodPaginator /> */}
      {/* <StatisticsChart tasksByDay={taskStatusCountByDay} /> */}
      <StatisticsChart tasksByDay={taskStatusCountByDay} tasksByMonth={taskStatusCountByMonth} />
    </>
  );
};

export default StatisticsPage;
