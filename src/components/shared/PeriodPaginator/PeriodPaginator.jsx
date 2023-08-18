import React from 'react';
import PropTypes from 'prop-types';
import { format, parse, addMonths, subMonths } from 'date-fns';
import { useParams, useNavigate } from 'react-router-dom';
import { DatePicker } from '../DatePicker/DatePicker';
import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type }) => {
  const params = useParams();
  const navigate = useNavigate();

  const getFormattedDate = (currentDate) => {
    if (currentDate) {
      const parsedDate = parse(
        currentDate,
        type === 'day' ? 'yyyy-MM-dd' : 'yyyy-MM-dd',
        new Date()
      );
      const formattedDate = format(parsedDate, type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy dd');
      return formattedDate;
    }
    const currentDateObj = new Date();
    const formattedMonth = format(currentDateObj, 'MMMM yyyy dd');
    const formattedDay = format(currentDateObj, 'dd MMMM yyyy');

    return type === 'day' ? formattedDay : formattedMonth;
  };

  const formattedDate = getFormattedDate(params.currentDate);

  const navigateToPrevious = () => {
    let newPath;
    if (type === 'day') {
      const currentDate = parse(params.currentDate, 'yyyy-MM-dd', new Date());
      const previousDate = new Date(currentDate);
      previousDate.setDate(currentDate.getDate() - 1);
      newPath = `/calendar/day/${format(previousDate, 'yyyy-MM-dd')}`;
    } else if (type === 'month') {
      const currentDate = parse(params.currentDate, 'yyyy-MM-dd', new Date());
      const previousMonth = subMonths(currentDate, 1);
      newPath = `/calendar/month/${format(previousMonth, 'yyyy-MM-dd')}`;
    }
    navigate(newPath, { replace: true });
  };

  const navigateToNext = () => {
    let newPath;
    if (type === 'day') {
      const currentDate = parse(params.currentDate, 'yyyy-MM-dd', new Date());
      const nextDate = new Date(currentDate);
      nextDate.setDate(currentDate.getDate() + 1);
      newPath = `/calendar/day/${format(nextDate, 'yyyy-MM-dd')}`;
    } else if (type === 'month') {
      const currentDate = parse(params.currentDate, 'yyyy-MM-dd', new Date());
      const nextMonth = addMonths(currentDate, 1);
      newPath = `/calendar/month/${format(nextMonth, 'yyyy-MM-dd')}`;
    }
    navigate(newPath, { replace: true });
  };

  return (
    <DivWrapper>
      <DatePicker onSelectDay={navigate} />
      <TitleWrapper
        onClick={(e) => {
          console.log(e);
        }}
      >
        {type === 'month' ? formattedDate : formattedDate}
      </TitleWrapper>
      <ButtonsWrapper>
        <ButtonWrapper1
          onClick={() => {
            prevHandler(type);
            navigateToPrevious();
          }}
        >
          &lt;
        </ButtonWrapper1>
        <ButtonWrapper2
          onClick={() => {
            nextHandler(type);
            navigateToNext();
          }}
        >
          &gt;
        </ButtonWrapper2>
      </ButtonsWrapper>
    </DivWrapper>
  );
};

PeriodPaginator.propTypes = {
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  type: PropTypes.string
};

export default PeriodPaginator;
