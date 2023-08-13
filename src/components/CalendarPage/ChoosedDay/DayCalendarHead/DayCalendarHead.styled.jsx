import { backgroundColor, colorText } from 'src/styles/variables/Variables';
import styled from 'styled-components';

export const DayCalendarHeadStyles = styled.ul`
  padding: 14px 18px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  margin-bottom: 14px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #fff;

  @media screen and (min-width: 768px) {
    padding: 10px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding: 10px 46px;
  }
`;

export const DayCalendarHeadItem = styled.li`
  a {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    text-align: center;
  }

  p {
    text-transform: uppercase;
  }
`;

export const WeekDay = styled.p`
  color: ${colorText.black};

  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const DateDayWrap = styled.div`
  width: fit-content;
  padding: 4px 6px;
  border-radius: 6px;

  background-color: ${(props) =>
    props.selectedDay ? backgroundColor.primaryBlue : backgroundColor.transparent};
  color: ${(props) => (props.selectedday ? colorText.white : colorText.black)};
`;

export const DateDay = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;
