import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import { forwardRef } from 'react';

import CalendarDataPicker from '../CalendarDataPiker/CalendarDataPicker';

import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type, date }) => {
  const getFormattedDate = () => {
    const formattedDate = format(new Date(date), type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy');
    return formattedDate;
  };
  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    // console.log('VALUE', value);
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {getFormattedDate()}
      </TitleWrapper>
    );
  });

  // <TitleWrapper>{getFormattedDate()}</TitleWrapper>
  const currentDate = parse(date, 'yyyy-MM-dd', new Date());
  // console.log('CURRENT', currentDate);
  return (
    <DivWrapper>
      <CalendarDataPicker type={type} CustomInput={CustomInput} onSelectDay={currentDate} />
      {/* <DatePicker onSelectDay={navigate} /> */}
      {/* <TitleWrapper>{type === 'month' ? formattedDate : formattedDate}</TitleWrapper> */}
      <ButtonsWrapper>
        <ButtonWrapper1
          onClick={() => {
            prevHandler(type);
          }}
        >
          &lt;
        </ButtonWrapper1>
        <ButtonWrapper2
          onClick={() => {
            nextHandler(type);
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
  type: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.any,
  onClick: PropTypes.func.isRequired
};

export default PeriodPaginator;
