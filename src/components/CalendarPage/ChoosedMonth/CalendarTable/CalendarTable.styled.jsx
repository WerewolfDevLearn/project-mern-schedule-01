import styled from 'styled-components';
import { themes } from 'src/styles/variables/themes';

export const CalendarTableStyles = styled.div`
  /* display: block;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  max-width: 400px; */
  width: 335px;
  height: 470px;
  margin-top: 14px;
`;
export const Calendar = styled.table`
  width: 335px;
  height: 470px;
  border-collapse: collapse;
  border: 1px solid #dce3e580;
  border-radius: 8px;
  background-color: ${themes.colors.white};
`;
export const Fragment = styled.td`
  border: 1px solid #dce3e580;
  border-radius: 8px;
  vertical-align: top;
  text-align: right;
  font-family: Inter;
  font-size: ${themes.fontSizes.xs};
  font-weight: ${themes.fontWeight.b};
`;
