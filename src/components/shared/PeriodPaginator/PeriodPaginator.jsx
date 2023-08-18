import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';

// import { useParams } from 'react-router';
// import { DatePicker } from '../DatePicker/DatePicker';
import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type, date }) => {
  const getFormatedDate = (params) => {
    console.log('params: ', params);
    if (params.length) {
      const parsedDate = parse(params, 'yyyy-MM-dd', new Date());
      console.log('parsedDate: ', parsedDate);
      const formattedDate = format(parsedDate, 'dd MMMM yyyy');
      return [formattedDate, currentDate];
    }
    const formattedDate = format(new Date(), 'dd MMMM yyyy');
    return [formattedDate, false];
  };

  const [formattedDate, currentDate] = getFormatedDate(date);

  return (
    <DivWrapper>
      {/* <DatePicker /> */}
      {currentDate ? (
        <TitleWrapper>
          {type === 'month' ? formattedDate.slice(3, formattedDate.length) : formattedDate}
        </TitleWrapper>
      ) : (
        <TitleWrapper>{formattedDate}</TitleWrapper>
      )}

      <ButtonsWrapper>
        <ButtonWrapper1 onClick={() => prevHandler(type)}>&lt;</ButtonWrapper1>
        <ButtonWrapper2 onClick={() => nextHandler(type)}>&gt;</ButtonWrapper2>
      </ButtonsWrapper>
    </DivWrapper>
  );
};
export default PeriodPaginator;

PeriodPaginator.propTypes = {
  prevHandler: PropTypes.func.isRequired,
  nextHandler: PropTypes.func.isRequired,
  type: PropTypes.string,
  date: PropTypes.string
};
