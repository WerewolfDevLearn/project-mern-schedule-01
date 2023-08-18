import { useState } from 'react';
import { lastDayOfMonth } from 'date-fns';
//
export function useMonthHendler(currentDate) {
  const date = new Date(currentDate);
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const [monthM, setMonthM] = useState(currMonth + 1);
  const [yearM, setYearM] = useState(currYear);

  const onPrevMonth = () => {
    setMonthM((monthM) => monthM - 1);
    if (monthM <= 1) {
      setYearM((year) => year - 1);
      setMonthM(12);
    }
  };
  const onNextMonth = () => {
    setMonthM((monthM) => monthM + 1);
    if (monthM >= 12) {
      setYearM((year) => year + 1);
      setMonthM(1);
    }
  };
  return [onPrevMonth, onNextMonth, yearM, monthM];
}
export function useDayHendler(currentDate) {
  const date = new Date(currentDate);
  const currYear = date.getFullYear();
  const currMonth = date.getMonth();
  const currDay = date.getDate();
  const lastDayOfCurrMonth = lastDayOfMonth(currMonth);
  const [yearD, setYearD] = useState(currYear);
  const [monthD, setMonthD] = useState(currMonth + 1);
  const [dayD, setDayD] = useState(currDay);

  const onPrevDay = () => {
    setDayD((dayD) => dayD - 1);
    if (dayD <= 1) {
      setDayD((monthD) => monthD - 1);
    }
    if (monthD <= 1) {
      setYearD((yearD) => yearD - 1);
      setMonthD(12);
    }
  };
  const onNextDay = () => {
    setDayD((dayD) => dayD + 1);
    if (dayD >= lastDayOfCurrMonth) setMonthD((month) => month + 1);
    if (monthD >= 12) {
      setYearD((yearD) => yearD + 1);
      setMonthD(1);
    }
  };
  return [onPrevDay, onNextDay, dayD, monthD, yearD];
}
