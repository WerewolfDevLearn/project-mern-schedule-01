import PropTypes from 'prop-types';

// import { Link } from 'react-router-dom';
import {
  CalendarTableStyles,
  DayOfWeek,
  Days,
  Link,
  Day,
  DayNumber,
  Task
} from './CalendarTable.styled';

export default function CalendarTable({ daysWithTasks }) {
  const daysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

  return (
    <CalendarTableStyles>
      <h2>CalendarTable</h2>
      {daysOfWeek.map((day) => (
        <DayOfWeek key={day}>{day}</DayOfWeek>
      ))}
      <Days className="days">
        {daysWithTasks.map((day) => (
          <Link key={day.date} to={`/calendar/day/${day.date}`}>
            <Day>
              <DayNumber>{day.date}</DayNumber>
              {day.tasks.map((task, index) => (
                <Task key={`task-${index}`}>{task.title}</Task>
              ))}
            </Day>
          </Link>
        ))}
      </Days>
    </CalendarTableStyles>
  );
}

CalendarTable.propTypes = {
  daysWithTasks: PropTypes.string.isRequired
};
