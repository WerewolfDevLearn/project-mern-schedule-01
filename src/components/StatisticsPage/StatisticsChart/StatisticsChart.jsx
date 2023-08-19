import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  LabelList
} from 'recharts';

import { StatisticsChartStyles, ChartContainer } from './StatisticsChart.styled';

const StatisticsChart = ({ tasks }) => {
  const calculateTaskStatusCount = (tasks) => {
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
    
    tasks.tasksByDay.forEach((task) => {
      console.log('tasks: ', tasks);
      if (task.category === 'to-do') {
        taskStatusCountDay.todo += 1;
      } else if (task.category === 'in-progress') {
        taskStatusCountDay.inprogress += 1;
      } else if (task.category === 'done') {
        taskStatusCountDay.done += 1;
      }
    });

    tasks.tasks.forEach((task) => {
      console.log('tasks: ', tasks);
      if (task.category === 'to-do') {
        taskStatusCountMonth.todo += 1;
      } else if (task.category === 'in-progress') {
        taskStatusCountMonth.inprogress += 1;
      } else if (task.category === 'done') {
        taskStatusCountMonth.done += 1;
      }
    });
    console.log('taskStatusCountMonth: ', taskStatusCountMonth);
    console.log('taskStatusCountDay: ', taskStatusCountDay);
    return [taskStatusCountDay, taskStatusCountMonth];
  };

  const [taskStatusCountDay, taskStatusCountMonth] = calculateTaskStatusCount(tasks);
  
  const calculatePercentages = (tasks) => {
    const allTasks = tasks.todo + tasks.inprogress + tasks.done;
    const todoPercentage = (tasks.todo / allTasks) * 100 || 0;
    const inprogressPercentage = (tasks.inprogress / allTasks) * 100 || 0;
    const donePercentage = (tasks.done / allTasks) * 100 || 0;

    return { todoPercentage, inprogressPercentage, donePercentage };
  };

  const chartDataByDay = calculatePercentages(taskStatusCountDay);
  // console.log(tasksByDay);
  const chartDataByMonth = calculatePercentages(taskStatusCountMonth);
  // console.log(tasksByMonth);

  const data = [
    {
      name: 'To Do',
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
      <ChartContainer>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barGap={10}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickCount={6} domain={[0, 100]} interval={0}>
              <Label value="Tasks" angle={0} position="top" offset={10} />
            </YAxis>
            <Tooltip />
            <Legend align="right" verticalAlign="top" layout="vertical" />
            <Bar
              dataKey="byDay"
              fill="url(#colorByDay)"
              name="By Day"
              radius={[0, 0, 7.5, 7.5]}
              barSize={27}
            >
              <LabelList
                dataKey="byDay"
                position="top"
                formatter={(value) => `${Math.round(value)}%`}
              />
            </Bar>
            <Bar
              dataKey="byMonth"
              fill="url(#colorByMonth)"
              name="By Month"
              radius={[0, 0, 7.5, 7.5]}
              barSize={27}
            >
              <LabelList
                dataKey="byMonth"
                position="top"
                formatter={(value) => `${Math.round(value)}%`}
              />
            </Bar>
          </BarChart>
        </ResponsiveContainer>
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="colorByDay" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FFD2DD" stopOpacity="0" />
              <stop offset="100%" stopColor="#FFD2DD" />
            </linearGradient>
            <linearGradient id="colorByMonth" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3E85F3" stopOpacity="0" />
              <stop offset="100%" stopColor="#3E85F3" />
            </linearGradient>
          </defs>
        </svg>
      </ChartContainer>
    </StatisticsChartStyles>
  );
};

StatisticsChart.propTypes = {
  tasks: PropTypes.object.isRequired
};

export default StatisticsChart;
