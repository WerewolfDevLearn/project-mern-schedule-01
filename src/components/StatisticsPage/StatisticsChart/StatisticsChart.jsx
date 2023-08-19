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

import {
  StatisticsChartStyles,
  ChartContainer,
  LegendStyles,
  LegendItem,
  Ellipse
} from './StatisticsChart.styled';
import { themes } from 'src/styles/variables/themes';

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
      if (task.category === 'to-do') {
        taskStatusCountDay.todo += 1;
      } else if (task.category === 'in-progress') {
        taskStatusCountDay.inprogress += 1;
      } else if (task.category === 'done') {
        taskStatusCountDay.done += 1;
      }
    });

    tasks.tasks.forEach((task) => {
      if (task.category === 'to-do') {
        taskStatusCountMonth.todo += 1;
      } else if (task.category === 'in-progress') {
        taskStatusCountMonth.inprogress += 1;
      } else if (task.category === 'done') {
        taskStatusCountMonth.done += 1;
      }
    });
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

  const renderLegend = ({ payload }) => {
    return (
      <LegendStyles>
        {payload.map((entry, index) => (
          <LegendItem key={`item-${index}`}>
            <Ellipse type={entry.value} />
            {entry.value}
          </LegendItem>
        ))}
      </LegendStyles>
    );
  };

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
            <CartesianGrid vertical={false} stroke={themes.colors.ligthBlue} />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={20} />
            <YAxis
              tickCount={6}
              domain={[0, 100]}
              interval={0}
              axisLine={false}
              tickLine={false}
              tickMargin={14}
            >
              <Label value="Tasks" angle={0} position="top" offset={20} />
            </YAxis>
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              layout="horizontal"
              iconType="circle"
              margin={{ bottom: '10px' }}
              content={renderLegend}
            />
            <Bar
              dataKey="byDay"
              fill="url(#colorByDay)"
              name="By Day"
              radius={[0, 0, 7.5, 7.5]}
              barSize={22}
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
              barSize={22}
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
