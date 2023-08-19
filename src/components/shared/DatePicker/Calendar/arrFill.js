import { nanoid } from 'nanoid';
export function arrFill(year, month) {
  const firstDayofMonth = new Date(year, month - 1, 1).getDay();
  const lastDateofMonth = new Date(year, month, 0).getDate();
  const lastDayofMonth = new Date(year, month - 1, lastDateofMonth).getDay();
  const lastDateofLastMonth = new Date(year, month - 1, 0).getDate();
  const arrOfDaysofMonth = [];
  //   const arr: number[] = [];

  // creating li of previous month last days
  for (let i = firstDayofMonth; i > 0; i--) {
    const day = {
      year: new Date(year, month - 1).getFullYear(),
      month: new Date(year, month - 1).getMonth(),
      day: lastDateofLastMonth - i + 1,
      currentDate: false,
      currentMonth: false,
      id: nanoid()
    };
    arrOfDaysofMonth.push(day);
    // arr.push(lastDateofLastMonth - i + 1);
  }
  // creating li of all days of current month
  for (let i = 1; i <= lastDateofMonth; i++) {
    const currentDay =
      i === new Date().getDate() &&
      month === new Date().getMonth() + 1 &&
      year === new Date().getFullYear();
    const day = {
      year: new Date(year, month).getFullYear(),
      month: new Date(year, month).getMonth(),
      day: i,
      currentDate: currentDay,
      currentMonth: true,
      id: nanoid()
    };
    arrOfDaysofMonth.push(day);
    // arr.push(i);
  }
  for (let i = lastDayofMonth; i < 6; i++) {
    const day = {
      year: new Date(year, month + 1).getFullYear(),
      month: new Date(year, month + 1).getMonth(),
      day: i - lastDayofMonth + 1,
      currentDate: false,
      currentMonth: false,
      id: nanoid()
    };
    arrOfDaysofMonth.push(day);
    // arr.push(i - lastDayofMonth + 1);
  }
  //   console.log(arrOfDaysofMonth);
  //   console.log(arr);
  return arrOfDaysofMonth;
}
