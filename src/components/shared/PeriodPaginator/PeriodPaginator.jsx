import React from 'react';
import moment from 'moment';
import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';
import { useParams } from 'react-router';

const PeriodPaginator = ({ prevHandler, nextHandler, type }) => {
  const params = useParams();
  const today = moment(params.currentDay ?? params.currentDate, 'YYYY-MM-DD');
  const currentDate = today.format('DD MMMM YYYY');

  return (
    <DivWrapper>
      <TitleWrapper>
        {type === 'month' ? currentDate.slice(3, currentDate.length) : currentDate}
      </TitleWrapper>

      <ButtonsWrapper>
        <ButtonWrapper1 onClick={() => prevHandler(type)}>&lt;</ButtonWrapper1>
        <ButtonWrapper2 onClick={() => nextHandler(type)}>&gt;</ButtonWrapper2>
      </ButtonsWrapper>
    </DivWrapper>
  );
};
export default PeriodPaginator;
