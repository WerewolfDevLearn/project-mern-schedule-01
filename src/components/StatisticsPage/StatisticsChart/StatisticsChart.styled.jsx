import styled from 'styled-components';

export const ChartContainer = styled.div`
  position: relative;
  width: 860px;
  height: 440px;
  border-radius: 20px;
  margin: 0 auto; /* Додаємо автоматичний відступ по боках для вирівнювання по центру */

  border: 0.8px solid ${({ theme }) => theme.colors.statisticsBgLines};

  @media (max-width: ${({ theme }) => theme.breakpoints.l}) {
    width: 100%;
    /* height: auto; */
  }
`;

export const StatisticsChartStyles = styled.div`
  /* margin-top: 40px; */
`;

export const TasksLabel = styled.p`
  position: absolute;
  top: 40px;
  left: 14px;

  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.textCancelBtn};

  @media screen and (width >= 768px) {
    top: 32;
    left: 32;
  }
`;
