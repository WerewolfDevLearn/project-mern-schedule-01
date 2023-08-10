// import StatisticsChart from '../SatisticsPage/StatisticsChart/StatisticsChart';

// export default function SatisticsPage() {
//   return (
//     <>
//       <h1>SatisticsPage</h1>;
//       <StatisticsChart />
//     </>
//   );
// }

import StatisticsChart from '../SatisticsPage/StatisticsChart/StatisticsChart';

import PeriodPaginator from './PeriodPaginator';

const StatisticsPage = () => {
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
      <PeriodPaginator />
      <StatisticsChart tasksByDay={tasksByDay} tasksByMonth={tasksByMonth} />
    </>
  );
};

export default StatisticsPage;
