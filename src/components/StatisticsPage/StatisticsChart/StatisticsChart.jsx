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

import { useThemeColors } from 'src/components/MainLayout/ThemeToggler/ThemeContextProvider';

import {
  StatisticsChartStyles,
  ChartContainer,
  LegendStyles,
  LegendItem,
  Ellipse
} from './StatisticsChart.styled';

const StatisticsChart = ({ tasks }) => {
  const theme = useThemeColors().theme;
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
  const chartDataByMonth = calculatePercentages(taskStatusCountMonth);
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
        <ResponsiveContainer>
          <BarChart
            data={data}
            margin={{ top: 81, right: 14, left: 0, bottom: 40 }}
            barGap={8}
            barCategoryGap="20%"
          >
            <CartesianGrid vertical={false} stroke={theme.colors.statisticsBgLines} />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tickMargin={20}
              allowDataOverflow={false}
              style={{
                fontSize: '12px',
                fontWeight: 400,
                fill: `${theme.colors.textCancelBtn}`
              }}
            />
            <YAxis
              tickCount={6}
              domain={[0, 100]}
              interval={0}
              axisLine={false}
              tickLine={false}
              tickMargin={14}
              style={{
                fontSize: '14px',
                fontWeight: 400,
                fill: `${theme.colors.textCancelBtn}`
              }}
            >
              <Label
                value="Tasks"
                angle={0}
                position="top"
                offset={30}
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  fill: `${theme.colors.textCancelBtn}`
                }}
              />
            </YAxis>
            <Tooltip />
            <Legend
              align="left"
              verticalAlign="top"
              wrapperStyle={{
                top: '-60px',
                left: 0
              }}
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
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  fill: `${theme.colors.textCancelBtn}`
                }}
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
                style={{
                  fontSize: '12px',
                  fontWeight: 500,
                  fill: `${theme.colors.textCancelBtn}`
                }}
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
