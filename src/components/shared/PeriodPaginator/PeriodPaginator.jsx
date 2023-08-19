import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import { useParams, useNavigate } from 'react-router-dom';

import { DatePicker } from '../DatePicker/DatePicker';

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

  return (
    <DivWrapper>
      {/* <DatePicker onSelectDay={navigate} /> */}
      <TitleWrapper>{getFormattedDate()}</TitleWrapper>
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
  date: PropTypes.string
};

export default PeriodPaginator;
