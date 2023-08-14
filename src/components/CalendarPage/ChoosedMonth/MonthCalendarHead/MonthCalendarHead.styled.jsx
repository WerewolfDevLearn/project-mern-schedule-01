import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const MonthCalendarHeadStyles = styled.div`
  /* display: block;
  width: 100%;
  max-width: 400px;
  color: ${themes.colors.white};
  font-size: ${themes.fontSizes.logoMobile};
  font-weight: ${themes.fontWeight.r};
  text-shadow: ${themes.shadows.authHeading};

 @media (min-width: ${themes.breakpoints.m}) {
    padding-block: 64px 100px;
  } */
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 335px;
  height: 50px;
  background-color: ${themes.colors.white};
  border: 1px solid #dce3e580;
  border-radius: 8px;
  font-size: ${themes.fontSizes.m};
  font-weight: ${themes.fontWeight.sb};
`;

export const Day = styled.div``;

export const DaysOfWeek = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: Inter;

  &:nth-last-child(even) {
    color: ${themes.colors.accent};
  }
`;
