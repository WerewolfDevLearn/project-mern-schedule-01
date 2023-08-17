// import PropTypes from 'prop-types';

// import { StatisticsChartStyles } from './StatisticsChart.styled';

// export default function StatisticsChart({ arg }) {
//   return (
//     <StatisticsChartStyles>
//       <h2>StatisticsChart</h2>
//       <p>{arg}</p>
//     </StatisticsChartStyles>
//   );
// }

// StatisticsChart.propTypes = {
//   arg: PropTypes.any
// };
// import React from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';

import { StatisticsChartStyles } from './StatisticsChart.styled';

const StatisticsChart = ({ tasksByDay, tasksByMonth, arg }) => {
  const calculatePercentages = (tasks) => {
    const allTasks = tasks.todo + tasks.inprogress + tasks.done;
    const todoPercentage = (tasks.todo / allTasks) * 100;
    const inprogressPercentage = (tasks.inprogress / allTasks) * 100;
    const donePercentage = (tasks.done / allTasks) * 100;

    return { todoPercentage, inprogressPercentage, donePercentage };
  };

  const chartDataByDay = calculatePercentages(tasksByDay);
  const chartDataByMonth = calculatePercentages(tasksByMonth);

  const data = [
    {
      name: 'Todo',
      byDay: chartDataByDay.todoPercentage,
      byMonth: chartDataByMonth.todoPercentage
    },
    {
      name: 'In Progress',
      byDay: chartDataByDay.inprogressPercentage,
      byMonth: chartDataByMonth.inprogressPercentage
    },
    { name: 'Done', byDay: chartDataByDay.donePercentage, byMonth: chartDataByMonth.donePercentage }
  ];

  return (
    <StatisticsChartStyles>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="byDay" fill="#8884d8" name="By Day" />
          <Bar dataKey="byMonth" fill="#82ca9d" name="By Month" />
        </BarChart>
      </ResponsiveContainer>
      <p>{arg}</p>
    </StatisticsChartStyles>
  );
};

StatisticsChart.propTypes = {
  tasksByDay: PropTypes.shape({
    todo: PropTypes.number.isRequired,
    inprogress: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired
  }).isRequired,
  tasksByMonth: PropTypes.shape({
    todo: PropTypes.number.isRequired,
    inprogress: PropTypes.number.isRequired,
    done: PropTypes.number.isRequired
  }).isRequired,
  arg: PropTypes.any
};

export default StatisticsChart;
