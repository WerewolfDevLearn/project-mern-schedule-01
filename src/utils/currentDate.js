export default function getCurrentDate() {
  const date = new Date();
  const currentDay = date.getDate();
  const currMonth = date.getMonth() + 1;
  const currYear = date.getFullYear();
  const currentDate = `${currYear}-${currMonth}-${currentDay}`;
  return currentDate;
}
