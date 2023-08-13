import PropTypes from 'prop-types';
import { startOfWeek, eachDayOfInterval } from 'date-fns'

import {
  DayCalendarHeadStyles,
  DayCalendarHeadItem,
  WeekDay,
  DateDay
} from './DayCalendarHead.styled';

export default function DayCalendarHead({ currentDate }) {
  // Сокращения дней недели должны будут сокращаться до 3х букв начиная с 768px screen
  return (
    <DayCalendarHeadStyles>
      <DayCalendarHeadItem>
        <WeekDay max >Mon</WeekDay>
        <DateDay currentDay={true}>6</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Tue</WeekDay>
        <DateDay>7</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Wed</WeekDay>
        <DateDay>8</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Thu</WeekDay>
        <DateDay>9</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Fri</WeekDay>
        <DateDay>10</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Sat</WeekDay>
        <DateDay>11</DateDay>
      </DayCalendarHeadItem>
      <DayCalendarHeadItem>
        <WeekDay>Sun</WeekDay>
        <DateDay>12</DateDay>
      </DayCalendarHeadItem>
    </DayCalendarHeadStyles>
  );
}

DayCalendarHead.propTypes = {
  arg: PropTypes.any
};
