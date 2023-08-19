import PropTypes from 'prop-types';
import { format, parse } from 'date-fns';
import { forwardRef } from 'react';
import { useTranslation } from 'react-i18next';

import CalendarDataPicker from '../CalendarDataPiker/CalendarDataPicker';

import {
  DivWrapper,
  TitleWrapper,
  ButtonsWrapper,
  ButtonWrapper1,
  ButtonWrapper2
} from './PeriodPaginator.styled';

const PeriodPaginator = ({ prevHandler, nextHandler, type, date }) => {
  const { t } = useTranslation();

  const getFormattedDate = () => {
    const formattedDate = format(new Date(date), type === 'day' ? 'dd MMMM yyyy' : 'MMMM yyyy');

    return formattedDate;
  };

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ onClick }, ref) => {
    const formattedDate = getFormattedDate();

    const monthYear = formattedDate.split(' ')[0];
    const translatedMonth = t(`months.${monthYear.toLowerCase()}`);

    const monthFullDate = formattedDate.split(' ')[1];
    const translatedMonthFull = t(`months.${monthFullDate.toLowerCase()}`);

    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {type === 'day'
          ? `${formattedDate.split(' ')[0]} ${translatedMonthFull} ${formattedDate.split(' ')[2]}`
          : `${translatedMonth} ${formattedDate.split(' ')[1]}`}
      </TitleWrapper>
    );
  });

  const currentDate = parse(date, 'yyyy-MM-dd', new Date());

  return (
    <DivWrapper>
      <CalendarDataPicker type={type} CustomInput={CustomInput} onSelectDay={currentDate} />
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
  // value: PropTypes.any,
  // onClick: PropTypes.func.isRequired,
  onClick: PropTypes.func
};

export default PeriodPaginator;
