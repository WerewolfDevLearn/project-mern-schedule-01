import { MonthCalendarHeadStyles, Day, DaysOfWeek } from './MonthCalendarHead.styled';

const longDaysOfWeek = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
const shortDaysOfWeek = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// const arr = [];

// function elemToObj(elem) {
//   return {
//     name: elem,
//     id: nanoid()
//   };
// }
// const arrOfDays = arr.map((item) => elemToObj(item));

export default function MonthCalendarHead() {
  return (
    <MonthCalendarHeadStyles>
      <DaysOfWeek>
        {shortDaysOfWeek.map((day, index) => (
          <Day key={index}>{day}</Day>
        ))}
        {/* {longDaysOfWeek.map((day) => (
          <Day key={day}>{day}</Day>
        ))} */}
      </DaysOfWeek>
    </MonthCalendarHeadStyles>
  );
}
