// import styled from 'styled-components';

// export const StatisticsChartStyles = styled.div``;

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  @media (min-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 1087px;
    height: 752px;
  }
`;

export const ChartContainer = styled.div`
  width: 860px;
  height: 440px;
  margin: 0 auto; /* Додаємо автоматичний відступ по боках для вирівнювання по центру */

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 100%;
    height: auto;
  }
`;

export const StatisticsChartStyles = styled.div``;
