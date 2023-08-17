import PropTypes, { object } from 'prop-types';
import { format, parse } from 'date-fns';
import { useParams } from 'react-router';

import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type }) => {
  const params = useParams();

  const getFormatedDate = (params) => {
    const keys = Object.keys(params);
    if (keys.length) {
      const currentDate = params.currentDate;
      const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
      const formattedDate = format(parsedDate, 'dd MMMM yyyy');
      return [formattedDate, currentDate];
    }
    const formattedDate = format(new Date(), 'dd MMMM yyyy');

    return [formattedDate, false];
  };
  const [formattedDate, currentDate] = getFormatedDate(params);

  return (
    <DivWrapper>
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
  type: PropTypes.string
};
