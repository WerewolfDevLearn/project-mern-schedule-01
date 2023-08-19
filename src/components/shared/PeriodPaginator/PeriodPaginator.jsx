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

  return (
    <DivWrapper>
      {/* <DatePicker onSelectDay={navigate} /> */}
      <TitleWrapper>{type === 'month' ? formattedDate : formattedDate}</TitleWrapper>
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
};

export default PeriodPaginator;
